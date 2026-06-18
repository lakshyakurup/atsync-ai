import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-10 px-6 py-16 lg:px-12">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">ATSync AI Platform</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 lg:text-5xl">
            Enterprise Applicant Tracking and Resume Intelligence
          </h1>
          <p className="max-w-2xl text-slate-300">
            Parse resumes, uncover missing keywords, and prioritize best-fit candidates with AI-powered ATS compatibility insights.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/signup">
              <Button>Start Free Trial</Button>
            </Link>
            <Link href="/dashboard" className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/70">
              View Dashboard
            </Link>
          </div>
        </div>
        <Card className="space-y-4">
          <p className="text-sm text-slate-300">Real-time recruiter intelligence</p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>• ATS compatibility score (0-100)</li>
            <li>• Automated candidate ranking and filters</li>
            <li>• Deep-dive analytics across role pipelines</li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
