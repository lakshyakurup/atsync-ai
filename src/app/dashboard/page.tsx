import { AtsScoreChart } from "@/components/dashboard/ats-score-chart";
import type { Candidate } from "@/types";

const stats = [
  { label: "Total Resumes", value: "1,284", trend: "+12%" },
  { label: "Matches", value: "742", trend: "+8%" },
  { label: "Flags", value: "53", trend: "-4%" },
];

const candidates: Candidate[] = [
  {
    id: "cand-1",
    name: "Ariella Boyd",
    email: "ariella.boyd@example.com",
    atsScore: 92,
    status: "matched",
    resumeUrl: "s3://resumes/ariella-boyd.pdf",
    createdAt: "2026-06-14T08:10:00.000Z",
  },
  {
    id: "cand-2",
    name: "Marcus Lee",
    email: "marcus.lee@example.com",
    atsScore: 67,
    status: "reviewing",
    resumeUrl: "s3://resumes/marcus-lee.pdf",
    createdAt: "2026-06-16T14:21:00.000Z",
  },
  {
    id: "cand-3",
    name: "Nina Patel",
    email: "nina.patel@example.com",
    atsScore: 41,
    status: "flagged",
    resumeUrl: "s3://resumes/nina-patel.pdf",
    createdAt: "2026-06-17T11:43:00.000Z",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-6 text-zinc-100 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">ATSync AI</p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Enterprise Hiring Console</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Centralized ATS intelligence for resume ranking, risk flags, and matching confidence.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-400">{item.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-emerald-400">{item.trend}</p>
              </div>
            </article>
          ))}

          <AtsScoreChart initialScore={84} />
        </section>

        <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70">
          <div className="border-b border-zinc-800 px-4 py-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Candidate Queue
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-zinc-900 text-xs uppercase tracking-wider text-zinc-400">
                <tr>
                  <th className="px-4 py-3">Candidate</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">ATS Score</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="border-t border-zinc-800 text-zinc-200">
                    <td className="px-4 py-3 font-medium">{candidate.name}</td>
                    <td className="px-4 py-3 text-zinc-400">{candidate.email}</td>
                    <td className="px-4 py-3">{candidate.atsScore}%</td>
                    <td className="px-4 py-3 capitalize">{candidate.status}</td>
                    <td className="px-4 py-3 text-zinc-400">
                      {new Date(candidate.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
