import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-zinc-100">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950/70 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">ATSync AI</p>
        <h1 className="mt-4 text-3xl font-semibold">Production ATS Intelligence Stack</h1>
        <p className="mt-4 text-sm text-zinc-400">
          Modular Next.js 15 architecture with API routes for upload and resume analysis.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-flex rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm font-medium hover:bg-zinc-800"
        >
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}
