import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="section-frame p-10">
        <p className="tag">La vie d abord</p>
        <h1 className="mt-6 font-[var(--font-serif)] text-5xl font-semibold leading-tight">
          Souverainete Creation
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Stabiliser la vie, clarifier l esprit, progresser en code, maitriser le jeu,
          transformer en revenus legaux et tracables. Tout commence par un gate "Life First".
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/dashboard"
            className="rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.2em] text-white"
          >
            Entrer
          </Link>
          <Link
            href="/roadmap"
            className="rounded-full border border-ink/30 px-6 py-3 text-sm uppercase tracking-[0.2em]"
          >
            Regles
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Stabiliser",
            text: "Sommeil, budget, relationnel, clarte. Gate quotidien et hebdo."
          },
          {
            title: "Play / Code",
            text: "Session de jeu guidee + micro-livrable code associe."
          },
          {
            title: "Cash",
            text: "Monetisation progressive, preuve par la valeur, jamais la fuite."
          }
        ].map((item) => (
          <div key={item.title} className="section-frame p-6">
            <h3 className="font-[var(--font-serif)] text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-ink/70">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="section-frame p-8">
        <h2 className="font-[var(--font-serif)] text-3xl font-semibold">
          Boucle Play / Code / Cash
        </h2>
        <ol className="mt-4 grid gap-3 text-sm text-ink/70 md:grid-cols-5">
          <li>1. Stabiliser (Life First)</li>
          <li>2. Jouer (objectif, review, notes)</li>
          <li>3. Coder (livrable quotidien)</li>
          <li>4. Publier (contenu ou outil)</li>
          <li>5. Monetiser (progressif)</li>
        </ol>
      </section>
    </div>
  );
}
