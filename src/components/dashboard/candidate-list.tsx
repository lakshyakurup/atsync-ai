import type { CandidateMetadataProfile, CandidateMatchProfile } from "@/types/candidate";
import { Badge } from "@/components/ui/badge";

interface CandidateListProps {
  candidates: CandidateMetadataProfile[];
  matches: CandidateMatchProfile[];
}

export function CandidateList({ candidates, matches }: CandidateListProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-100">Automated Candidate List</h3>
        <div className="flex gap-2">
          <Badge>Top Match</Badge>
          <Badge>Needs Review</Badge>
          <Badge>Recent Upload</Badge>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="py-2 pr-4">Candidate</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2 pr-4">Experience</th>
              <th className="py-2 pr-4">Match</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => {
              const match = matches.find((entry) => entry.candidateId === candidate.id);

              return (
                <tr key={candidate.id} className="border-t border-slate-800">
                  <td className="py-3 pr-4 font-medium text-slate-100">{candidate.fullName}</td>
                  <td className="py-3 pr-4">{candidate.role}</td>
                  <td className="py-3 pr-4">{candidate.experienceYears} yrs</td>
                  <td className="py-3 pr-4 text-cyan-300">{match?.matchPercentage ?? 0}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
