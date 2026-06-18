import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-6 py-16">
      <Card className="w-full max-w-md space-y-5">
        <h1 className="text-2xl font-semibold text-slate-100">Create ATSync AI Workspace</h1>
        <form className="space-y-4">
          <input className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Company" type="text" required />
          <input className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Work email" type="email" required />
          <button className="w-full rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400" type="submit">
            Create Workspace
          </button>
        </form>
        <p className="text-sm text-slate-400">
          Already have an account? <Link className="text-cyan-300" href="/login">Sign in</Link>
        </p>
      </Card>
    </main>
  );
}
