const STEPS = [
  { n: "01", title: "Discover", body: "Assess context, stakeholders and existing commitments." },
  { n: "02", title: "Design", body: "Structure the program logic, KPIs and reporting framework." },
  { n: "03", title: "Mobilize", body: "Engage communities, partners and field teams." },
  { n: "04", title: "Implement", body: "Deliver the program on the ground, on schedule." },
  { n: "05", title: "Monitor", body: "Track indicators and collect verifiable field evidence." },
  { n: "06", title: "Report", body: "Package outcomes into board- and donor-ready reports." },
];

export function ImpactProcessTimeline() {
  return (
    <section className="bg-navy text-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          OUR PROCESS
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] max-w-xl text-balance">
          Six stages, from discovery to a finished report.
        </h2>

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-[13px] left-0 right-0 h-px bg-white/10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10">
            {STEPS.map((step) => (
              <div key={step.n} className="relative">
                <div className="hidden lg:flex h-[26px] w-[26px] rounded-full bg-navy border border-gold items-center justify-center text-[10px] text-gold font-semibold relative z-10">
                  {step.n}
                </div>
                <p className="lg:hidden font-display text-[14px] text-gold/70">{step.n}</p>
                <h3 className="font-display text-[18px] mt-3">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-warm-white/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
