import { AlertCircle, Compass } from "lucide-react";

const PROBLEMS = [
  {
    title: "Hard to Execute Locally",
    body: "Head-office CSR strategies often stall without partners who understand the communities and regulatory context on the ground.",
  },
  {
    title: "Hard to Verify",
    body: "Without independent field coordination, it's difficult to confirm that program funds reached their intended outcomes.",
  },
  {
    title: "Hard to Report",
    body: "Boards, donors and regulators expect structured ESG and impact reporting — not anecdotes and photographs.",
  },
];

export function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          THE CHALLENGE
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-2xl text-balance">
          Companies struggle to execute CSR locally, verify impact and
          report results.
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
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shrink-0">
            <Compass size={20} />
          </span>
          <div>
            <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-3">
              OUR APPROACH
            </p>
            <h3 className="font-display text-[22px] text-charcoal leading-snug">
              Strutum designs, executes, monitors and reports impact
              programs — as one accountable engagement.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-gray max-w-2xl">
              Rather than handing off pieces of a CSR program to separate
              vendors, Strutum Impact carries a program from strategy
              through field delivery to the final report your stakeholders
              see.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
