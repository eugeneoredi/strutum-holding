import { ShieldCheck } from "lucide-react";

export function Governance() {
  return (
    <section className="bg-emerald text-warm-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-24 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold mb-6">
          <ShieldCheck size={24} />
        </span>
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          GOVERNANCE
        </p>
        <h2 className="font-display text-[26px] lg:text-[32px] leading-[1.3] text-balance">
          Strutum Holding operates to a professional standard, with ethical
          conduct and statutory compliance built into every engagement —
          for our clients and within our own organization.
        </h2>
      </div>
    </section>
  );
}
