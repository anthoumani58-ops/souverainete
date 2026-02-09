import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Life First" },
  { href: "/arsenal", label: "Arsenal" },
  { href: "/trackers/code", label: "Code" },
  { href: "/trackers/play", label: "Jeu" },
  { href: "/monetization", label: "Monetisation" },
  { href: "/roadmap", label: "Roadmap" }
];

export default function NavBar() {
  return (
    <header className="border-b border-ink/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] uppercase">
          Souverainete
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-ink/20"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/login"
          className="rounded-full border border-ink/30 px-4 py-2 text-sm uppercase tracking-[0.2em]"
        >
          Acces
        </Link>
      </div>
    </header>
  );
}
