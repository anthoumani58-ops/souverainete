import ArsenalCard from "@/components/ArsenalCard";
import { arsenalEntities } from "@/lib/arsenal";

export default function ArsenalPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="tag">Arsenal Invisible</p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold">Arsenal Invisible</h1>
        <p className="mt-2 text-sm text-ink/70">
          Metaphores structurees, jamais imposees. Des gardiens, des checklists, des scripts.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {arsenalEntities.map((entity) => (
          <ArsenalCard
            key={entity.name}
            name={entity.name}
            role={entity.role}
            message={entity.message}
            checklist={entity.checklist}
          />
        ))}
      </div>
    </div>
  );
}
