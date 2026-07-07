import Link from "next/link";
import {
  Leaf,
  LineChart,
  Calculator,
  Banknote,
  ShieldCheck,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const GROUPS = [
  {
    division: "Strutum Impact",
    icon: Leaf,
    items: [
      { icon: BarChart3, name: "CSR & ESG", href: "/strutum-impact#csr-esg" },
      {
        icon: ClipboardList,
        name: "Monitoring & Evaluation",
        href: "/strutum-impact#monitoring-evaluation",
      },
    ],
  },
  {
    division: "Strutum Advisory",
    icon: LineChart,
    items: [
      { icon: Calculator, name: "Accounting & Tax", href: "/strutum-advisory#accounting-tax" },
      { icon: Banknote, name: "CFO Services", href: "/strutum-advisory#cfo-services" },
      {
        icon: ShieldCheck,
        name: "Compliance Advisory",
        href: "/strutum-advisory#compliance-advisory",
      },
    ],
  },
];

export function ServiceCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          SERVICE CATEGORIES
        </p>
        <h2 className="font-display text-[32px] lg:text-[38px] leading-[1.15] text-charcoal max-w-lg text-balance">
          Specific engagements within each division.
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-12">
          {GROUPS.map((group) => (
            <div key={group.division}>
              <div className="flex items-center gap-2.5 pb-4 border-b border-charcoal/10">
                <group.icon size={18} className="text-gold" />
                <p className="font-display text-[17px] text-charcoal">
                  {group.division}
                </p>
              </div>
              <div className="mt-5 space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-3 py-3.5 px-1 border-b border-charcoal/5 hover:border-gold/40 transition-colors"
                  >
                    <item.icon size={17} className="text-gray group-hover:text-gold transition-colors" />
                    <span className="text-[14px] text-charcoal group-hover:text-navy font-medium transition-colors">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
