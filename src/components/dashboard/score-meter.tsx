interface ScoreMeterProps {
  score: number;
}

export function ScoreMeter({ score }: ScoreMeterProps) {
  const boundedScore = Math.max(0, Math.min(100, score));
  const radius = 66;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (boundedScore / 100) * circumference;

  return (
    <div className="relative mx-auto flex h-44 w-44 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          className="text-slate-700"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          className="text-cyan-400"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-4xl font-semibold text-slate-100">{boundedScore}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">ATS Score</p>
      </div>
    </div>
  );
}
