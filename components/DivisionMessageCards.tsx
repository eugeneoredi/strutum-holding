import Link from "next/link";
import { ArrowRight, Leaf, LineChart } from "lucide-react";

const DIVISIONS = [
  {
    icon: Leaf,
    name: "Strutum Impact",
    tag: "CSR & ESG Solutions",
    message:
      "For organizations that need structured CSR, ESG, sustainability and impact programs.",
    cta: "Explore Impact Solutions",
    href: "/strutum-impact",
    tone: "bg-navy",
  },
  {
    icon: LineChart,
    name: "Strutum Advisory",
    tag: "Accounting, Taxation & Consulting",
    message:
      "For organizations that need accounting, taxation, payroll, reporting and corporate advisory.",
    cta: "Explore Advisory Solutions",
    href: "/strutum-advisory",
    tone: "bg-emerald",
  },
];

export function DivisionMessageCards() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {DIVISIONS.map((d) => (
            <div
              key={d.name}
              className={`${d.tone} text-warm-white p-10 lg:p-12 flex flex-col`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold mb-6">
                <d.icon size={21} />
              </span>
              <p className="font-display text-[26px] leading-none">{d.name}</p>
              <p className="text-[12.5px] tracking-wide text-gold mt-2">{d.tag}</p>
              <p className="mt-5 text-[14.5px] leading-relaxed text-warm-white/70 flex-1">
                {d.message}
              </p>
              <Link
                href={d.href}
                className="mt-8 inline-flex items-center gap-2 self-start rounded-sm border border-gold px-6 py-3 text-[12px] font-semibold tracking-wider text-gold hover:bg-gold hover:text-navy transition-colors"
              >
                {d.cta.toUpperCase()}
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
