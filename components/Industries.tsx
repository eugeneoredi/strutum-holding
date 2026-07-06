import Link from "next/link";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  "Multinational Corporations",
  "Technology Companies",
  "Banks & Financial Institutions",
  "NGOs & Foundations",
  "Development Agencies",
  "Manufacturing & FMCG",
  "Telecommunications",
  "Energy & Infrastructure",
  "Healthcare & Education",
  "Government & Public Sector",
];

export function Industries() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
              INDUSTRIES SERVED
            </p>
            <h2 className="font-display text-[32px] lg:text-[38px] leading-[1.15] text-charcoal max-w-lg text-balance">
              Sectors that rely on structured, compliant delivery.
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider text-charcoal hover:text-gold transition-colors shrink-0"
          >
            VIEW ALL INDUSTRIES
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-charcoal/10 border border-charcoal/10">
          {INDUSTRIES.map((name) => (
            <div
              key={name}
              className="bg-ivory hover:bg-navy group transition-colors px-6 py-8 flex items-center"
            >
              <p className="text-[13.5px] font-medium text-charcoal group-hover:text-warm-white transition-colors leading-snug">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
