import LockedBanner from "@/components/LockedBanner";
import { getSampleGateStatus, isMonetizationLocked } from "@/lib/gates";
import { monetizationPaths } from "@/lib/monetization";

export default function MonetizationPage() {
  const gateStatus = getSampleGateStatus();
  const locked = isMonetizationLocked(gateStatus);

  return (
    <div className="space-y-8">
      <div>
        <p className="tag">Monetisation</p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold">Monetisation</h1>
        <p className="mt-2 text-sm text-ink/70">
          Revenus legaux et tracables. Gate obligatoire.
        </p>
      </div>

      {locked ? (
        <LockedBanner
          title="Gate verrouille"
          reason="Valide les gates quotidien et hebdo avant toute monetisation."
        />
      ) : null}

      <div className="grid gap-6 md:grid-cols-3">
        {monetizationPaths.map((path) => (
          <div key={path.id} className="section-frame p-6">
            <h3 className="font-[var(--font-serif)] text-2xl font-semibold">{path.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{path.description}</p>
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/50">
              Prerequis
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-ink/70">
              {path.prereqs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-ink/70">{path.qualityGate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
