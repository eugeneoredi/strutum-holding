import { Check } from "lucide-react";

const FEATURES = [
  "Real-time impact dashboards",
  "Field evidence and photo documentation",
  "KPI tracking against program targets",
  "Full audit trail for donor compliance",
  "Beneficiary data collection and reporting",
];

export function ImpactReporting() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
            REPORTING &amp; EVIDENCE
          </p>
          <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-md text-balance">
            Reporting your board and donors can rely on.
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-gray max-w-md">
            Every program is tracked against agreed indicators, with
            evidence collected in the field and compiled into structured
            reports — not a slide deck assembled after the fact.
          </p>
          <ul className="mt-7 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14px] text-charcoal">
                <Check size={16} className="mt-0.5 text-gold shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard mockup — placeholder for a real product screenshot later */}
        <div className="bg-navy text-warm-white p-6 lg:p-8 border border-charcoal/10">
          <div className="flex items-center justify-between mb-6">
            <p className="font-display text-[15px]">Impact Dashboard</p>
            <span className="text-[10px] tracking-wide text-gold border border-gold/40 rounded-full px-2.5 py-1">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Beneficiaries", value: "12,480" },
              { label: "Sites Active", value: "34" },
              { label: "KPIs on Track", value: "91%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 p-3.5">
                <p className="font-display text-[18px] text-gold-soft">{stat.value}</p>
                <p className="text-[10px] text-warm-white/50 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-4">
            <p className="text-[11px] text-warm-white/50 mb-3">
              Program Milestones — Q3
            </p>
            <div className="space-y-2.5">
              {[
                { label: "Community Enrollment", pct: 100 },
                { label: "Field Data Collection", pct: 82 },
                { label: "Verification & Audit", pct: 58 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-[11px] text-warm-white/70 mb-1">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
