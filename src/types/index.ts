export interface Candidate {
  id: string;
  name: string;
  email: string;
  atsScore: number;
  status: "new" | "reviewing" | "matched" | "flagged" | "rejected";
  resumeUrl: string;
  createdAt: string;
}

export interface AnalysisResult {
  score: number;
  missingKeywords: string[];
  recommendations: string[];
}
