export interface AnalysisLogMetadata {
  candidateName?: string;
  candidateEmail?: string;
  score: number;
  missingKeywordCount: number;
  recommendationCount: number;
  createdAt: string;
}

export function getSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };
}

export async function logAnalysisMetadataStub(metadata: AnalysisLogMetadata) {
  return {
    id: crypto.randomUUID(),
    table: "analysis_logs",
    inserted: true,
    metadata,
    note: "Stub Supabase insert. Replace with client.from('analysis_logs').insert(...)",
  };
}
