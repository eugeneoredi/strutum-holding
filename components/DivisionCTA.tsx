import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DivisionCTA({
  title,
  subtitle,
  buttonText,
  href,
  tone = "emerald",
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
  tone?: "emerald" | "navy";
}) {
  return (
    <section className={tone === "emerald" ? "bg-emerald text-warm-white" : "bg-navy text-warm-white"}>
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
        <h2 className="font-display text-[28px] lg:text-[36px] leading-[1.2] text-balance">
          {title}
        </h2>
        <p className="mt-5 text-[15px] text-warm-white/70 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-9">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wider text-navy hover:bg-gold-soft transition-colors"
          >
            {buttonText.toUpperCase()}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
