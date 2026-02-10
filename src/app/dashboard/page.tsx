import GateChecklist from "@/components/GateChecklist";
import MetricCard from "@/components/MetricCard";
import { auth } from "@/lib/auth";
import {
  crisisProtocol,
  dailyGateTemplate,
  getGateStatusForUser,
  isMonetizationLocked,
  weeklyGateTemplate
} from "@/lib/gates";
import { resolveCrisisLock, triggerCrisisLock, updateDailyGate, updateWeeklyGate } from "./actions";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return (
      <div className="section-frame p-6">
        <p className="text-sm text-ink/70">Connexion requise.</p>
      </div>
    );
  }

  const gateStatus = await getGateStatusForUser(userId);
  const locked = isMonetizationLocked(gateStatus);
  const dailyItems = dailyGateTemplate.map((item) => ({
    ...item,
    done: gateStatus.daily[item.id as keyof typeof gateStatus.daily]
  }));
  const weeklyItems = weeklyGateTemplate.map((item) => ({
    ...item,
    done: gateStatus.weekly[item.id as keyof typeof gateStatus.weekly]
  }));
  const dailyDone = dailyItems.filter((item) => item.done).length;
  const weeklyDone = weeklyItems.filter((item) => item.done).length;
  const stabilityScore = Math.round(((dailyDone / dailyItems.length) * 0.7 + (weeklyDone / weeklyItems.length) * 0.3) * 100);

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
        <MetricCard label="Stabilite" value={`${stabilityScore}%`} hint="Sommeil + budget + relation" />
        <MetricCard
          label="Code"
          value={gateStatus.daily.code ? "OK" : "A faire"}
          hint="Micro-livrable aujourd hui"
        />
        <MetricCard
          label="Jeu"
          value={gateStatus.daily.completed ? "OK" : "En attente"}
          hint="Objectif defini avant session"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <form action={updateDailyGate} className="space-y-3">
          <GateChecklist
            title="Gate quotidien"
            items={dailyItems}
            footer="Duree minimum: 5 a 10 minutes."
            editable
          />
          <button className="rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
            Enregistrer
          </button>
        </form>
        <form action={updateWeeklyGate} className="space-y-3">
          <GateChecklist
            title="Gate hebdo"
            items={weeklyItems}
            footer="Revue budget, objectifs, progres."
            editable
          />
          <button className="rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
            Enregistrer
          </button>
        </form>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <GateChecklist
          title="Gate crise"
          items={crisisProtocol.map((item) => ({ ...item, done: false }))}
          footer="Si stress, colere ou impulsivite: pause 24h de monetisation."
        />
        <div className="space-y-4">
          <div className="section-frame p-6">
            <h3 className="font-[var(--font-serif)] text-2xl font-semibold">Etat crise</h3>
            <p className="mt-3 text-sm text-ink/70">
              {gateStatus.crisis.active
                ? `Crise active jusqu au ${gateStatus.crisis.lockUntil?.toLocaleString("fr-FR")}`
                : "Aucune crise active."}
            </p>
            <form action={triggerCrisisLock} className="mt-4 flex flex-wrap gap-2">
              <input
                type="text"
                name="reason"
                placeholder="Raison (optionnel)"
                className="flex-1 rounded-full border border-ink/20 px-4 py-2 text-sm"
              />
              <button className="rounded-full border border-ember/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ember">
                Declencher 24h
              </button>
            </form>
            {gateStatus.crisis.active ? (
              <form action={resolveCrisisLock} className="mt-3">
                <button className="rounded-full border border-ink/30 px-4 py-2 text-xs uppercase tracking-[0.2em]">
                  Marquer resolu
                </button>
              </form>
            ) : null}
          </div>
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
        </div>
      </section>
    </div>
  );
}
