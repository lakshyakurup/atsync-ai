import { Card } from "@/components/ui/card";

interface MetricItem {
  label: string;
  value: string;
  delta: string;
}

interface MetricsCardsProps {
  metrics: MetricItem[];
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.label} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
          <p className="text-2xl font-semibold text-slate-100">{metric.value}</p>
          <p className="text-xs text-emerald-300">{metric.delta}</p>
        </Card>
      ))}
    </div>
  );
}
