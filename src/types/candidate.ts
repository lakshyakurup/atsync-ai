export interface CandidateMetadataProfile {
  id: string;
  fullName: string;
  role: string;
  experienceYears: number;
  location: string;
  skills: string[];
  uploadedAt: string;
}

export interface CandidateMatchProfile {
  candidateId: string;
  matchPercentage: number;
  atsCompatibilityScore: number;
}

export interface MissingKeywordEntry {
  keyword: string;
  impact: "high" | "medium" | "low";
  frequencyGap: number;
}

export interface OptimizationRecommendation {
  id: string;
  title: string;
  detail: string;
  priority: "critical" | "recommended" | "optional";
  expectedLift: number;
}
