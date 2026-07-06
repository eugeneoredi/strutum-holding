import Link from "next/link";
import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "SME Essentials",
    audience: "For small and growing businesses",
    features: [
      "Monthly bookkeeping & reconciliation",
      "Tax filing & compliance",
      "Payroll for small teams",
      "Quarterly financial summary",
    ],
    highlight: false,
  },
  {
    name: "Institutional",
    audience: "For NGOs, foundations & mid-size corporates",
    features: [
      "Everything in SME Essentials",
      "Monthly management accounts",
      "Budgeting & board-ready reporting",
      "Statutory compliance calendar",
    ],
    highlight: true,
  },
  {
    name: "Corporate",
    audience: "For larger, multi-entity organizations",
    features: [
      "Everything in Institutional",
      "CFO-as-a-Service advisory",
      "Internal controls & risk advisory",
      "Custom reporting cadence",
    ],
    highlight: false,
  },
];

export function RetainerPackages() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          MONTHLY RETAINERS
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-xl text-balance">
          Ongoing packages, scaled to your organization.
        </h2>
        <p className="mt-4 text-[14px] text-gray max-w-lg">
          Every engagement is scoped to your organization's size and
          complexity — request a proposal for exact pricing.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 flex flex-col ${
                pkg.highlight
                  ? "bg-navy text-warm-white border-2 border-gold"
                  : "bg-ivory border border-charcoal/10 text-charcoal"
              }`}
            >
              {pkg.highlight && (
                <span className="text-[10px] tracking-[0.15em] text-gold font-semibold mb-4">
                  MOST REQUESTED
                </span>
              )}
              <h3 className="font-display text-[21px]">{pkg.name}</h3>
              <p
                className={`text-[12.5px] mt-1.5 ${
                  pkg.highlight ? "text-warm-white/60" : "text-gray"
                }`}
              >
                {pkg.audience}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                    <Check size={15} className="mt-0.5 text-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?division=advisory"
                className={`mt-8 inline-flex justify-center rounded-sm border px-6 py-3 text-[12px] font-semibold tracking-wider transition-colors ${
                  pkg.highlight
                    ? "border-gold bg-gold text-navy hover:bg-gold-soft"
                    : "border-charcoal/20 text-charcoal hover:border-gold hover:text-gold"
                }`}
              >
                REQUEST PROPOSAL
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
