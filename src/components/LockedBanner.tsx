type LockedBannerProps = {
  title: string;
  reason: string;
};

export default function LockedBanner({ title, reason }: LockedBannerProps) {
  return (
    <div className="section-frame border-ember/30 bg-white/70 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-ember">{title}</p>
      <p className="mt-2 text-sm text-ink/70">{reason}</p>
    </div>
  );
}
