import { FileBarChart } from "lucide-react";

// PLACEHOLDER: replace with real project case studies (client name/sector,
// challenge, approach, measured outcome) once available.
const PLACEHOLDERS = [
  { tag: "CSR & ESG" },
  { tag: "Accounting & Tax" },
  { tag: "Monitoring & Evaluation" },
];

export function CaseStudies() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          CASE STUDIES
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-lg text-balance">
          Project results, added as engagements complete.
        </h2>
        <p className="mt-4 text-[14px] text-gray max-w-md">
          Case studies are added here once client engagements are complete
          and cleared for public reference.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {PLACEHOLDERS.map((p, i) => (
            <div
              key={i}
              className="border border-dashed border-charcoal/20 bg-white p-7"
            >
              <FileBarChart size={22} className="text-gray/40" strokeWidth={1.5} />
              <p className="text-[11px] tracking-[0.15em] text-gray/50 font-semibold mt-4">
                {p.tag.toUpperCase()}
              </p>
              <p className="font-display text-[17px] text-charcoal/40 mt-3">
                Case Study Title
              </p>
              <p className="mt-2 text-[13px] text-gray/40 leading-relaxed">
                Client, challenge, approach and measured outcome will appear
                here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
