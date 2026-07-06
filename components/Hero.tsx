import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-warm-white">
      <Image
        src="/logo-mark.png"
        alt=""
        width={520}
        height={541}
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-24 top-8 opacity-[0.07] hidden lg:block"
      />
      {/* Abstract skyline signature — stands in for a licensed photograph */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[45%] opacity-70"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <rect x="60" y="140" width="46" height="180" fill="#0a1f33" />
        <rect x="120" y="90" width="34" height="230" fill="#0e2740" />
        <rect x="168" y="160" width="52" height="160" fill="#0a1f33" />
        <rect x="235" y="60" width="30" height="260" fill="#0e2740" />
        <rect x="280" y="120" width="60" height="200" fill="#0a1f33" />
        <rect x="355" y="180" width="40" height="140" fill="#0e2740" />
        <rect x="410" y="40" width="26" height="280" fill="#0a1f33" />
        <rect x="450" y="150" width="70" height="170" fill="#0e2740" />
        <rect x="540" y="100" width="36" height="220" fill="#0a1f33" />
        <rect x="590" y="170" width="55" height="150" fill="#0e2740" />
        <rect x="660" y="20" width="24" height="300" fill="#0a1f33" />
        <rect x="700" y="130" width="64" height="190" fill="#0e2740" />
        <rect x="780" y="80" width="32" height="240" fill="#0a1f33" />
        <rect x="825" y="160" width="48" height="160" fill="#0e2740" />
        <rect x="885" y="110" width="40" height="210" fill="#0a1f33" />
        <rect x="935" y="55" width="28" height="265" fill="#0e2740" />
        <rect x="975" y="175" width="60" height="145" fill="#0a1f33" />
        <rect x="1045" y="95" width="34" height="225" fill="#0e2740" />
        <rect x="1090" y="150" width="50" height="170" fill="#0a1f33" />
        <rect x="1150" y="30" width="26" height="290" fill="#0e2740" />
        <rect x="1190" y="140" width="58" height="180" fill="#0a1f33" />
        <rect x="1260" y="185" width="42" height="135" fill="#0e2740" />
        <rect x="1315" y="100" width="32" height="220" fill="#0a1f33" />
        <rect x="1360" y="165" width="50" height="155" fill="#0e2740" />
      </svg>
      <div className="absolute inset-x-0 bottom-[45%] h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-28 lg:pt-24 lg:pb-36">
        <div className="flex justify-end mb-10">
          <p className="text-[12px] tracking-wide text-warm-white/60 max-w-[220px] text-right">
            Trusted by organizations across{" "}
            <span className="text-gold">Africa</span> and beyond.
          </p>
        </div>

        <h1 className="font-display text-balance text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.08] max-w-3xl">
          Building Sustainable Value.
          <br />
          <span className="text-gold-soft">Driving Africa Forward.</span>
        </h1>

        <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-warm-white/70">
          Strutum Holding is a Pan-African professional services group
          delivering integrated solutions in Impact (CSR &amp; ESG) and
          Advisory (Accounting, Taxation &amp; Consulting) to help
          organizations grow responsibly, comply confidently and create
          lasting impact.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wider text-navy hover:bg-gold-soft transition-colors"
          >
            EXPLORE OUR SERVICES
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-warm-white/25 px-7 py-3.5 text-[13px] font-semibold tracking-wider text-warm-white hover:border-gold hover:text-gold transition-colors"
          >
            <Play size={14} />
            SCHEDULE CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}
