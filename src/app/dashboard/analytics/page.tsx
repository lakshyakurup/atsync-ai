import { Card } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 py-8 lg:px-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-100">Analytics Suite</h1>
        <p className="text-sm text-slate-400">Cross-pipeline intelligence for recruiter and hiring manager teams.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="space-y-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Keyword Coverage</p>
          <p className="text-3xl font-semibold text-cyan-300">89%</p>
          <p className="text-sm text-slate-400">Average resume keyword alignment across open roles.</p>
        </Card>
        <Card className="space-y-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Drop-off Stage</p>
          <p className="text-3xl font-semibold text-amber-300">Technical Screen</p>
          <p className="text-sm text-slate-400">Largest candidate attrition detected in current quarter.</p>
        </Card>
        <Card className="space-y-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Optimization Lift</p>
          <p className="text-3xl font-semibold text-emerald-300">+18%</p>
          <p className="text-sm text-slate-400">Projected shortlist quality uplift from AI recommendations.</p>
        </Card>
      </section>
    </main>
  );
}
