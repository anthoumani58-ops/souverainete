import GateChecklist from "@/components/GateChecklist";
import MetricCard from "@/components/MetricCard";
import { crisisProtocol, dailyGateTemplate, getSampleGateStatus, isMonetizationLocked, weeklyGateTemplate } from "@/lib/gates";

export default function DashboardPage() {
  const gateStatus = getSampleGateStatus();
  const locked = isMonetizationLocked(gateStatus);

  return (
    <div className="space-y-10">
      <div>
        <p className="tag">Dashboard</p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold">
          Life First Gate
        </h1>
        <p className="mt-2 text-sm text-ink/70">
          Verrou obligatoire avant le jeu et la monetisation. Performance et stabilite avant tout.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        <MetricCard label="Stabilite" value="45%" hint="Sommeil + budget + relation" />
        <MetricCard label="Code" value="1 commit" hint="Micro-livrable aujourd hui" />
        <MetricCard label="Jeu" value="0 session" hint="Objectif non defini" />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <GateChecklist
          title="Gate quotidien"
          items={dailyGateTemplate.map((item) => ({ ...item, done: false }))}
          footer="Duree minimum: 5 a 10 minutes."
        />
        <GateChecklist
          title="Gate hebdo"
          items={weeklyGateTemplate.map((item) => ({ ...item, done: false }))}
          footer="Revue budget, objectifs, progres."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <GateChecklist
          title="Gate crise"
          items={crisisProtocol.map((item) => ({ ...item, done: false }))}
          footer="Si stress, colere ou impulsivite: pause 24h de monetisation."
        />
        <div className="section-frame p-6">
          <h3 className="font-[var(--font-serif)] text-2xl font-semibold">Etat monetisation</h3>
          <p className="mt-3 text-sm text-ink/70">
            {locked
              ? "Bloquee: gates non valides ou crise active."
              : "Active: gates valides."}
          </p>
          <p className="mt-4 text-xs text-ink/60">
            La vie d abord. Les revenus viennent apres la stabilite.
          </p>
        </div>
      </section>
    </div>
  );
}
