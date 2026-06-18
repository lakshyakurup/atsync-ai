import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-700/60 bg-slate-900/90 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.35)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
