import {
  Target,
  ClipboardCheck,
  Leaf,
  BarChart3,
  Users,
  Building2,
  ClipboardList,
  FileText,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const SERVICES = [
  { icon: Target, name: "CSR Strategy & Program Design" },
  { icon: ClipboardCheck, name: "CSR Implementation & Project Management" },
  { icon: Leaf, name: "ESG & Sustainability Advisory" },
  { icon: BarChart3, name: "Impact Measurement & Reporting" },
  { icon: Users, name: "Community Engagement & Stakeholder Mapping" },
  { icon: Building2, name: "Corporate Foundation Management" },
  { icon: ClipboardList, name: "Monitoring & Evaluation (M&E)" },
  { icon: FileText, name: "Sustainability Reporting Support" },
  { icon: HeartHandshake, name: "Donor & Development Partner Support" },
  { icon: MapPin, name: "Field Coordination & Partner Management" },
];

export function ImpactServicesGrid() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          WHAT WE DELIVER
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-xl text-balance">
          CSR &amp; ESG services built for institutional reporting.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
          {SERVICES.map(({ icon: Icon, name }) => (
            <div key={name} className="bg-white p-7 flex flex-col gap-4">
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
