import { FileDown } from "lucide-react";

// PLACEHOLDER: link href to real PDF once the report/brochure is ready.
const REPORTS = [
  { title: "Annual Impact Outlook: East Africa", type: "PDF Report" },
  { title: "Strutum Holding Company Profile", type: "PDF Brochure" },
];

export function ImpactReports() {
  return (
    <section className="bg-navy text-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          REPORTS &amp; RESOURCES
        </p>
        <h2 className="font-display text-[28px] lg:text-[34px] leading-[1.2] max-w-lg text-balance">
          Downloadable reports, coming soon.
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-2xl">
          {REPORTS.map((r) => (
            <div
              key={r.title}
              className="flex items-center gap-4 border border-white/15 p-5 opacity-60"
            >
              <FileDown size={22} className="text-gold shrink-0" />
              <div>
                <p className="text-[14px] font-medium">{r.title}</p>
                <p className="text-[11.5px] text-warm-white/50 mt-0.5">
                  {r.type} — coming soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
