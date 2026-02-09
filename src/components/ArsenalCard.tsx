type ArsenalCardProps = {
  name: string;
  role: string;
  message: string;
  checklist: string[];
};

export default function ArsenalCard({ name, role, message, checklist }: ArsenalCardProps) {
  return (
    <div className="section-frame p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-[var(--font-serif)] text-2xl font-semibold">{name}</h3>
        <span className="tag">{role}</span>
      </div>
      <p className="mt-3 text-sm text-ink/70">{message}</p>
      <ul className="mt-4 list-disc pl-5 text-sm text-ink/70">
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
