import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-frame p-8">
      <h1 className="font-[var(--font-serif)] text-4xl font-semibold">Page introuvable</h1>
      <p className="mt-2 text-sm text-ink/70">Revenir a la base.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full border border-ink/30 px-4 py-2 text-xs uppercase tracking-[0.2em]"
      >
        Accueil
      </Link>
    </div>
  );
}
