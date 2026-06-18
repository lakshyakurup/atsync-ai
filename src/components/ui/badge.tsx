import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}
