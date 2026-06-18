"use client";

import { useMemo, useState } from "react";

interface AtsScoreChartProps {
  initialScore?: number;
}

export function AtsScoreChart({ initialScore = 78 }: AtsScoreChartProps) {
  const [score, setScore] = useState(initialScore);

  const ringStyle = useMemo(() => {
    const safeScore = Math.max(0, Math.min(100, score));
    return {
      background: `conic-gradient(#22c55e ${safeScore * 3.6}deg, #27272a 0deg)`,
    };
  }, [score]);

  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-100">ATS Score Radar</h3>
        <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
          Interactive
        </span>
      </div>

      <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-4">
        <div className="relative h-40 w-40 rounded-full p-3" style={ringStyle}>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-center">
            <div>
              <p className="text-4xl font-bold text-zinc-100">{score}</p>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Match</p>
            </div>
          </div>
        </div>

        <input
          aria-label="ATS score"
          type="range"
          min={0}
          max={100}
          value={score}
          onChange={(event) => setScore(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800"
        />
      </div>
    </section>
  );
}
