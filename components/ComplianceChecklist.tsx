import { CheckCircle2 } from "lucide-react";

const ITEMS = [
  {
    title: "KRA Compliance",
    body: "Tax registration, filing and correspondence with the Kenya Revenue Authority handled on schedule.",
  },
  {
    title: "Payroll Compliance",
    body: "PAYE, NSSF, NHIF/SHIF and other statutory deductions processed accurately every pay cycle.",
  },
  {
    title: "Statutory Deductions",
    body: "All mandatory contributions calculated, remitted and documented for audit purposes.",
  },
  {
    title: "Reporting Calendars",
    body: "A fixed annual calendar of filing deadlines and reporting dates, tracked on your behalf.",
  },
  {
    title: "Management Accounts",
    body: "Monthly or quarterly accounts giving leadership a current, accurate view of performance.",
  },
];

export function ComplianceChecklist() {
  return (
    <section id="compliance-advisory" className="bg-navy text-warm-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          COMPLIANCE
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] max-w-xl text-balance">
          Statutory discipline, handled on a fixed calendar.
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-t border-b border-white/10">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="py-6 grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 items-start"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-gold shrink-0" />
                <p className="font-display text-[17px]">{item.title}</p>
              </div>
              <p className="text-[13.5px] leading-relaxed text-warm-white/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
