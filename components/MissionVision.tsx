export function MissionVision() {
  return (
    <section className="relative grid lg:grid-cols-2 bg-navy text-warm-white">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden lg:block" />

      <div className="px-6 lg:px-14 py-16 lg:py-20 border-b lg:border-b-0 border-white/10">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          MISSION
        </p>
        <p className="font-display text-[24px] lg:text-[28px] leading-[1.3] max-w-md">
          To help organizations operate responsibly, comply confidently and
          create measurable impact across Africa.
        </p>
      </div>

      <div className="px-6 lg:px-14 py-16 lg:py-20 bg-emerald">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          VISION
        </p>
        <p className="font-display text-[24px] lg:text-[28px] leading-[1.3] max-w-md">
          To become a leading African corporate services and impact
          infrastructure group.
        </p>
      </div>
    </section>
  );
}
