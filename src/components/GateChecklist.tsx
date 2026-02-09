type GateChecklistProps = {
  title: string;
  items: { id: string; label: string; done?: boolean }[];
  footer?: string;
};

export default function GateChecklist({ title, items, footer }: GateChecklistProps) {
  return (
    <div className="section-frame p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-[var(--font-serif)] text-2xl font-semibold">{title}</h3>
        <span className="tag">Gate</span>
      </div>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <span
              className={`h-3 w-3 rounded-full border ${
                item.done ? "bg-moss border-moss" : "border-ink/30"
              }`}
            />
            <span className={item.done ? "text-ink" : "text-ink/70"}>{item.label}</span>
          </li>
        ))}
      </ul>
      {footer ? <p className="mt-4 text-xs text-ink/60">{footer}</p> : null}
    </div>
  );
}
