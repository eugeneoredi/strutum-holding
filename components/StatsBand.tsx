import { Users, Globe2, Target, Handshake, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Globe2, value: "15+", label: "Countries Reached" },
  { icon: Target, value: "250+", label: "Projects Delivered" },
  { icon: Handshake, value: "10+", label: "Years of Combined Experience" },
  { icon: ShieldCheck, value: "Trusted", label: "By Global Partners" },
];

export function StatsBand() {
  return (
    <section className="bg-ivory border-y border-charcoal/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon size={26} className="text-gold shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-display text-[19px] text-charcoal leading-none">{value}</p>
              <p className="text-[11.5px] text-gray mt-1 leading-snug">{label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-charcoal/10 bg-navy">
        <p className="text-center text-[12px] tracking-wide text-warm-white/70 py-3">
          Integrated Solutions.{" "}
          <span className="text-gold">Measurable Impact.</span> Sustainable
          Growth. &nbsp;·&nbsp; Proudly serving organizations across Africa
          and beyond.
        </p>
      </div>
    </section>
  );
}
