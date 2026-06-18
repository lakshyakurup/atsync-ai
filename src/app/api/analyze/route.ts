import { NextResponse } from "next/server";
import { generateGeminiContent } from "@/lib/gemini";
import { logAnalysisMetadataStub } from "@/lib/supabase";
import type { AnalysisResult } from "@/types";

interface AnalyzeRequestBody {
  resume: string;
  jobDescription: string;
  candidateName?: string;
  candidateEmail?: string;
}

function parseGeminiResult(raw: string): AnalysisResult {
  const safeFallback: AnalysisResult = {
    score: 0,
    missingKeywords: [],
    recommendations: [],
  };

  if (!raw) return safeFallback;

  try {
    const parsed = JSON.parse(raw) as Partial<AnalysisResult>;
    return {
      score: Math.max(0, Math.min(100, Number(parsed.score ?? 0))),
      missingKeywords: Array.isArray(parsed.missingKeywords)
        ? parsed.missingKeywords.map(String)
        : [],
      recommendations: Array.isArray(parsed.recommendations)
        ? parsed.recommendations.map(String)
        : [],
    };
  } catch {
    return safeFallback;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<AnalyzeRequestBody>;

    if (!body.resume || !body.jobDescription) {
      return NextResponse.json(
        { error: "resume and jobDescription are required." },
        { status: 400 },
      );
    }

    const prompt = `You are an ATS analysis engine.
Return ONLY valid JSON with this exact schema:
{
  "score": number,
  "missingKeywords": string[],
  "recommendations": string[]
}

Rules:
- score is 0-100.
- missingKeywords includes high-impact missing terms.
- recommendations is a structured action list in short sentences.
- Do not include markdown, code fences, or extra keys.

Job Description:
${body.jobDescription}

Resume:
${body.resume}`;

    const rawResult = await generateGeminiContent(prompt);
    const analysis = parseGeminiResult(rawResult);

    const metadataLog = await logAnalysisMetadataStub({
      candidateName: body.candidateName,
      candidateEmail: body.candidateEmail,
      score: analysis.score,
      missingKeywordCount: analysis.missingKeywords.length,
      recommendationCount: analysis.recommendations.length,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ analysis, metadataLog }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
