import Link from "next/link";
import { ArrowRight, Leaf, LineChart, Check } from "lucide-react";

const IMPACT_ITEMS = [
  "CSR Strategy & Implementation",
  "ESG & Sustainability Advisory",
  "Impact Measurement & Reporting",
  "Community Engagement",
  "Foundation Management",
  "Projects Monitoring & Evaluation",
  "Stakeholder Engagement",
  "Capacity Building & Training",
];

const ADVISORY_ITEMS = [
  "Accounting & Bookkeeping",
  "Tax Advisory & Compliance",
  "Payroll & Statutory Compliance",
  "Financial Reporting",
  "Business Advisory",
  "CFO & Outsourced Finance",
  "Internal Controls & Risk Advisory",
  "Company Secretarial Services",
];

export function DivisionPanels() {
  return (
    <section className="relative grid lg:grid-cols-2 bg-navy">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden lg:block" />

      <div className="px-6 lg:px-14 py-16 lg:py-20 border-b lg:border-b-0 border-white/10">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
            <Leaf size={19} />
          </span>
          <div>
            <p className="font-display text-[22px] leading-none text-warm-white">Strutum Impact</p>
            <p className="text-[12px] tracking-wide text-gold mt-1">CSR &amp; ESG Solutions</p>
          </div>
        </div>
        <p className="text-[14px] leading-relaxed text-warm-white/65 max-w-md">
          We partner with organizations to design, implement and manage
          impactful CSR and ESG programs that create measurable social,
          environmental and economic value.
        </p>
        <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {IMPACT_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] text-warm-white/75">
              <Check size={15} className="mt-0.5 text-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/strutum-impact"
          className="mt-9 inline-flex items-center gap-2 rounded-sm border border-gold px-6 py-3 text-[12px] font-semibold tracking-wider text-gold hover:bg-gold hover:text-navy transition-colors"
        >
          EXPLORE IMPACT SOLUTIONS
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="px-6 lg:px-14 py-16 lg:py-20 bg-emerald">
        <div className="flex items-center gap-3 mb-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
            <LineChart size={19} />
          </span>
          <div>
            <p className="font-display text-[22px] leading-none text-warm-white">Strutum Advisory</p>
            <p className="text-[12px] tracking-wide text-gold mt-1">Accounting, Taxation &amp; Consulting</p>
          </div>
        </div>
        <p className="text-[14px] leading-relaxed text-warm-white/65 max-w-md">
          We provide expert financial, tax and business advisory services
          that ensure compliance, strengthen performance and support
          sustainable growth.
        </p>
        <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {ADVISORY_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] text-warm-white/75">
              <Check size={15} className="mt-0.5 text-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/strutum-advisory"
          className="mt-9 inline-flex items-center gap-2 rounded-sm border border-gold px-6 py-3 text-[12px] font-semibold tracking-wider text-gold hover:bg-gold hover:text-navy transition-colors"
        >
          EXPLORE ADVISORY SOLUTIONS
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
