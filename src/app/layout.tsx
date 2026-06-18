import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATSync AI",
  description: "AI-powered Applicant Tracking and Resume Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800/80 bg-slate-950/95">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
              <Link href="/" className="text-lg font-semibold tracking-wide text-cyan-300">
                ATSync AI
              </Link>
              <nav className="flex items-center gap-4 text-sm text-slate-300">
                <Link href="/dashboard" className="hover:text-cyan-300">Dashboard</Link>
                <Link href="/dashboard/analytics" className="hover:text-cyan-300">Analytics</Link>
                <Link href="/login" className="hover:text-cyan-300">Login</Link>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
