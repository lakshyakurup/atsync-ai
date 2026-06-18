export interface GeminiExtractionPromptInput {
  jobDescription: string;
  resumeText: string;
}

export function buildGeminiExtractionPrompt({
  jobDescription,
  resumeText,
}: GeminiExtractionPromptInput): string {
  return [
    "You are ATSync AI, an enterprise resume intelligence assistant.",
    "Extract candidate profile metadata, ATS match percentage, missing keywords, and optimization recommendations.",
    "Respond with structured JSON using deterministic keys.",
    "Job Description:",
    jobDescription,
    "Resume:",
    resumeText,
  ].join("\n\n");
}
