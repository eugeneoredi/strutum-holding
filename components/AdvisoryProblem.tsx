import { AlertCircle, ShieldCheck } from "lucide-react";

const PROBLEMS = [
  {
    title: "Books Fall Behind",
    body: "Growing organizations often outrun their internal finance capacity, leaving reconciliations and reporting behind schedule.",
  },
  {
    title: "Compliance Risk Builds Up",
    body: "Missed statutory deadlines and payroll errors expose the organization to penalties and reputational risk.",
  },
  {
    title: "Leadership Lacks Visibility",
    body: "Without timely management accounts, boards and executives make decisions without a clear financial picture.",
  },
];

export function AdvisoryProblem() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          THE CHALLENGE
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-2xl text-balance">
          Companies need clean books, tax compliance, statutory discipline
          and financial clarity.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="border-t-2 border-gold/50 pt-5">
              <AlertCircle size={20} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-display text-[18px] text-charcoal mt-4">
                {p.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ivory border border-charcoal/10 p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-gold shrink-0">
            <ShieldCheck size={20} />
          </span>
          <div>
            <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-3">
              OUR APPROACH
            </p>
            <h3 className="font-display text-[22px] text-charcoal leading-snug">
              Strutum Advisory keeps your finances accurate, compliant and
              board-ready — every month.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-gray max-w-2xl">
              We operate as an extension of your finance function, with
              defined reporting calendars and direct accountability for
              statutory compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
