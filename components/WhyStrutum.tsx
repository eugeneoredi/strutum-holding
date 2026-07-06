import { Building2, ShieldCheck, MapPinned, BarChart3 } from "lucide-react";

const REASONS = [
  {
    icon: Building2,
    title: "One Group, Two Disciplines",
    body: "Impact and Advisory operate under a single institutional standard, so organizations can coordinate CSR, ESG, finance and compliance through one accountable partner.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Institutional Complexity",
    body: "Multi-country reporting, donor requirements and statutory compliance are handled with the structure and documentation serious institutions expect.",
  },
  {
    icon: MapPinned,
    title: "Pan-African Grounding",
    body: "Local field presence and stakeholder relationships across the region, paired with reporting that meets international standards.",
  },
  {
    icon: BarChart3,
    title: "Everything Is Measurable",
    body: "Every engagement is tied to defined KPIs, evidence and reporting cadences — not activity for its own sake.",
  },
];

export function WhyStrutum() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[0.9fr_1.4fr] gap-14">
        <div>
          <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
            WHY STRUTUM
          </p>
          <h2 className="font-display text-[32px] lg:text-[38px] leading-[1.15] text-charcoal text-balance">
            An operating partner, not a vendor.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-gray max-w-sm">
            We work the way institutional clients expect: structured
            engagements, clear documentation and outcomes that can be
            reported upward with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t border-charcoal/10 pt-5">
              <Icon size={24} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-display text-[18px] text-charcoal mt-4">
                {title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
