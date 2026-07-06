const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We assess your organization's context, obligations and objectives across impact or financial operations.",
  },
  {
    n: "02",
    title: "Structure",
    body: "We design the program, controls or reporting framework needed to meet institutional standards.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "Our teams execute on the ground and in the books, with defined timelines and accountability.",
  },
  {
    n: "04",
    title: "Report",
    body: "You receive evidence, financials or KPI dashboards your board and partners can rely on.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-navy text-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          HOW WE WORK
        </p>
        <h2 className="font-display text-[32px] lg:text-[38px] leading-[1.15] max-w-lg text-balance">
          A consistent engagement model, in either division.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`relative px-0 lg:px-8 py-6 lg:py-0 ${
                i > 0 ? "lg:border-l border-white/10" : ""
              }`}
            >
              <p className="font-display text-[15px] text-gold/70">{step.n}</p>
              <h3 className="font-display text-[20px] mt-3">{step.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-warm-white/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
