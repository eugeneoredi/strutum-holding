import {
  Calculator,
  ReceiptText,
  Wallet,
  FileBarChart,
  Briefcase,
  Landmark,
  ShieldAlert,
  Building2,
  LineChart,
  FileCheck2,
} from "lucide-react";

const SERVICES = [
  { icon: Calculator, name: "Accounting & Bookkeeping", id: "accounting-tax" },
  { icon: ReceiptText, name: "Tax Advisory & Compliance" },
  { icon: Wallet, name: "Payroll & Statutory Compliance" },
  { icon: FileBarChart, name: "Financial Reporting" },
  { icon: Landmark, name: "CFO-as-a-Service / Outsourced Finance", id: "cfo-services" },
  { icon: Briefcase, name: "Business Advisory & Performance" },
  { icon: ShieldAlert, name: "Internal Controls & Risk Advisory" },
  { icon: Building2, name: "Company Registration & Secretarial Support" },
  { icon: LineChart, name: "Budgeting, Forecasting & Cash-Flow" },
  { icon: FileCheck2, name: "Compliance Support for Growing Businesses" },
];

export function AdvisoryServicesGrid() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          WHAT WE DELIVER
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-xl text-balance">
          Financial and compliance services built for growth.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
          {SERVICES.map(({ icon: Icon, name, id }) => (
            <div
              key={name}
              id={id}
              className="bg-white p-7 flex flex-col gap-4 scroll-mt-28"
            >
              <Icon size={22} className="text-gold" strokeWidth={1.5} />
              <p className="text-[14px] font-medium text-charcoal leading-snug">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
