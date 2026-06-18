import { CandidateList } from "@/components/dashboard/candidate-list";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { ScoreMeter } from "@/components/dashboard/score-meter";
import { Card } from "@/components/ui/card";
import type { CandidateMatchProfile, CandidateMetadataProfile } from "@/types/candidate";

const candidates: CandidateMetadataProfile[] = [
  {
    id: "c1",
    fullName: "Avery Carter",
    role: "Senior Product Designer",
    experienceYears: 7,
    location: "Seattle, WA",
    skills: ["Figma", "UX Strategy", "Design Systems"],
    uploadedAt: "2026-06-12",
  },
  {
    id: "c2",
    fullName: "Jordan Kim",
    role: "ML Engineer",
    experienceYears: 5,
    location: "Austin, TX",
    skills: ["Python", "LLM Evaluation", "AWS"],
    uploadedAt: "2026-06-14",
  },
  {
    id: "c3",
    fullName: "Riley Singh",
    role: "Talent Operations Lead",
    experienceYears: 8,
    location: "Remote",
    skills: ["Hiring Ops", "Analytics", "Greenhouse"],
    uploadedAt: "2026-06-15",
  },
];

const matches: CandidateMatchProfile[] = [
  { candidateId: "c1", matchPercentage: 86, atsCompatibilityScore: 88 },
  { candidateId: "c2", matchPercentage: 92, atsCompatibilityScore: 95 },
  { candidateId: "c3", matchPercentage: 78, atsCompatibilityScore: 81 },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 py-8 lg:px-12">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-slate-100">Recruiter Dashboard</h1>
          <p className="text-sm text-slate-400">Monitor hiring pipeline quality and candidate readiness.</p>
        </div>
      </header>

      <MetricsCards
        metrics={[
          { label: "Active Candidates", value: "1,248", delta: "+12.3% this week" },
          { label: "Avg. ATS Match", value: "84%", delta: "+2.4% this week" },
          { label: "Time-to-Shortlist", value: "2.1 days", delta: "-0.7 days" },
        ]}
      />

      <section className="grid gap-6 xl:grid-cols-[340px_1fr]">
        <Card className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-100">Role Compatibility</h2>
          <ScoreMeter score={91} />
          <p className="text-sm text-slate-400">AI-derived ATS compatibility score for current priority role.</p>
        </Card>

        <Card>
          <CandidateList candidates={candidates} matches={matches} />
        </Card>
      </section>
    </main>
  );
}
