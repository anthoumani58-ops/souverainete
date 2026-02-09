export default function PlayTrackerPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="tag">Tracker</p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold">Jeu (Go)</h1>
        <p className="mt-2 text-sm text-ink/70">
          Session guidee, objectifs, review, notes SGF optionnelles.
        </p>
      </div>
      <div className="section-frame p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Objectif de session"
            className="rounded-full border border-ink/20 px-4 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Resultat / rang"
            className="rounded-full border border-ink/20 px-4 py-2 text-sm"
          />
        </div>
        <textarea
          className="mt-4 h-32 w-full rounded-xl border border-ink/10 p-4 text-sm"
          placeholder="3 points de review."
        />
        <input
          type="text"
          placeholder="Lien replay SGF (optionnel)"
          className="mt-4 w-full rounded-full border border-ink/20 px-4 py-2 text-sm"
        />
        <button className="mt-4 rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
