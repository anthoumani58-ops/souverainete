export default function JournalPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="tag">Journal</p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold">Journal</h1>
        <p className="mt-2 text-sm text-ink/70">
          Notes courtes, tags, humeur. Stabilite d abord.
        </p>
      </div>
      <div className="section-frame p-6">
        <textarea
          className="h-40 w-full rounded-xl border border-ink/10 p-4 text-sm"
          placeholder="Ecris ce qui compte aujourd hui."
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="tags: sommeil, focus"
            className="rounded-full border border-ink/20 px-4 py-2 text-sm"
          />
          <button className="rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
