import Link from "next/link";
import { ArrowRight } from "lucide-react";

// PLACEHOLDER: article excerpts and dates. Replace with real published
// insights as they're written; titles are drawn directly from the brief.
const ARTICLES = [
  {
    category: "CSR / ESG",
    title: "How Corporates Can Build Measurable CSR Programs in Africa",
    excerpt:
      "A practical framework for moving from goodwill CSR spending to programs with defined KPIs and verifiable outcomes.",
    href: "/insights/measurable-csr-programs-africa",
  },
  {
    category: "Tax",
    title: "Tax Compliance Checklist for Companies Operating in Kenya",
    excerpt:
      "The recurring statutory deadlines and filings every company operating in Kenya needs on its calendar.",
    href: "/insights/tax-compliance-checklist-kenya",
  },
  {
    category: "Business",
    title: "Why Multinationals Need Local Corporate Infrastructure in Africa",
    excerpt:
      "Head-office strategy alone rarely survives contact with local regulatory and operational realities.",
    href: "/insights/local-corporate-infrastructure-africa",
  },
  {
    category: "Reports",
    title: "Annual Impact Outlook: East Africa",
    excerpt:
      "A downloadable overview of CSR and ESG trends across East Africa's corporate and development sectors.",
    href: "/insights/annual-impact-outlook-east-africa",
  },
];

const CATEGORIES = ["All", "CSR / ESG", "Tax", "Business", "Reports"];

export function InsightsList() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap gap-3 mb-14">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`text-[12px] tracking-wide px-4 py-2 border ${
                cat === "All"
                  ? "border-gold bg-gold text-navy font-semibold"
                  : "border-charcoal/15 text-gray"
              }`}
            >
              {cat.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ARTICLES.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group block border border-charcoal/10 hover:border-gold/60 transition-colors p-8"
            >
              <p className="text-[11px] tracking-[0.15em] text-gold font-semibold">
                {a.category.toUpperCase()}
              </p>
              <h3 className="font-display text-[21px] leading-snug text-charcoal mt-4 group-hover:text-navy">
                {a.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-gray">
                {a.excerpt}
              </p>
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
