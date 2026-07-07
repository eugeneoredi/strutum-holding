import { Users, Globe2, Target, Handshake } from "lucide-react";

const STATS = [
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Globe2, value: "15+", label: "Countries Reached" },
  { icon: Target, value: "250+", label: "Projects Delivered" },
  { icon: Handshake, value: "10+", label: "Years Combined Experience" },
];

export function ImpactMetricsBand() {
  return (
    <section className="bg-navy text-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center lg:text-left">
            <Icon size={26} className="text-gold mx-auto lg:mx-0" strokeWidth={1.5} />
            <p className="font-display text-[28px] mt-3">{value}</p>
            <p className="text-[12px] text-warm-white/60 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
