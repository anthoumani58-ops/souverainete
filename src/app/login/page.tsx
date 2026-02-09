import SignInPanel from "@/components/SignInPanel";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="tag">Acces</p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold">Connexion</h1>
        <p className="mt-2 text-sm text-ink/70">
          Auth par email ou GitHub. Respect total de la vie d abord.
        </p>
      </div>
      <SignInPanel />
    </div>
  );
}
