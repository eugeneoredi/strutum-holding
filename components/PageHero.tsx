export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative bg-navy text-warm-white overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-5">
          {eyebrow.toUpperCase()}
        </p>
        <h1 className="font-display text-balance text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.12] max-w-3xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-warm-white/65">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
