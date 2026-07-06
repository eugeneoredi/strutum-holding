import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-emerald text-warm-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
        <h2 className="font-display text-[30px] lg:text-[38px] leading-[1.2] text-balance">
          Ready to build sustainable value with a Pan-African partner?
        </h2>
        <p className="mt-5 text-[15px] text-warm-white/70 max-w-xl mx-auto">
          Speak with an advisor about your CSR, ESG, accounting or compliance
          needs — every inquiry is treated confidentially.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wider text-navy hover:bg-gold-soft transition-colors"
          >
            REQUEST PROPOSAL
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-warm-white/25 px-7 py-3.5 text-[13px] font-semibold tracking-wider text-warm-white hover:border-gold hover:text-gold transition-colors"
          >
            SPEAK TO AN ADVISOR
          </Link>
        </div>
      </div>
    </section>
  );
}
