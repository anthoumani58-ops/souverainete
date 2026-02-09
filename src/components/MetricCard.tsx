type MetricCardProps = {
  label: string;
  value: string;
  hint: string;
};

export default function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <div className="section-frame p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-ink/60">{label}</p>
      <p className="mt-3 font-[var(--font-serif)] text-3xl font-semibold text-ink">
        {value}
      </p>
      <p className="mt-2 text-sm text-ink/60">{hint}</p>
    </div>
  );
}
