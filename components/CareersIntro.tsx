import { Globe2, TrendingUp, Users2 } from "lucide-react";

const POINTS = [
  {
    icon: Globe2,
    title: "Pan-African Work",
    body: "Engagements that span multiple African markets, not a single local office.",
  },
  {
    icon: TrendingUp,
    title: "Institutional Standard",
    body: "Work built to the same rigor as multinational and development-sector clients expect.",
  },
  {
    icon: Users2,
    title: "Two Disciplines",
    body: "Grow within CSR/ESG delivery, financial advisory, or move between both.",
  },
];

export function CareersIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          WHY STRUTUM
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-lg text-balance">
          Build a career across Africa's growing corporate services sector.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t-2 border-gold/50 pt-5">
              <Icon size={22} className="text-gold" strokeWidth={1.5} />
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
