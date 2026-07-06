import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    tag: "CSR / ESG",
    title: "How Corporates Can Build Measurable CSR Programs in Africa",
    href: "/insights/measurable-csr-programs-africa",
  },
  {
    tag: "Tax",
    title: "Tax Compliance Checklist for Companies Operating in Kenya",
    href: "/insights/tax-compliance-checklist-kenya",
  },
  {
    tag: "Business",
    title: "Why Multinationals Need Local Corporate Infrastructure in Africa",
    href: "/insights/local-corporate-infrastructure-africa",
  },
];

export function FeaturedInsights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
              FEATURED INSIGHTS
            </p>
            <h2 className="font-display text-[32px] lg:text-[38px] leading-[1.15] text-charcoal max-w-lg text-balance">
              Perspective on impact, tax and Africa-focused growth.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider text-charcoal hover:text-gold transition-colors shrink-0"
          >
            VIEW ALL INSIGHTS
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group block border border-charcoal/10 hover:border-gold/60 transition-colors p-7"
            >
              <p className="text-[11px] tracking-[0.15em] text-gold font-semibold">
                {a.tag.toUpperCase()}
              </p>
              <h3 className="font-display text-[19px] leading-snug text-charcoal mt-4 group-hover:text-navy">
                {a.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold text-gray group-hover:text-gold transition-colors">
                Read Insight
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
