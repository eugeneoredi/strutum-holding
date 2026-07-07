import {
  Building2,
  Cpu,
  Landmark,
  HeartHandshake,
  Globe2,
  Factory,
  Radio,
  Zap,
  Stethoscope,
  Scale,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Building2,
    name: "Multinational Corporations",
    body: "CSR/ESG program execution and statutory compliance across multiple African markets, coordinated through one partner.",
  },
  {
    icon: Cpu,
    name: "Technology Companies",
    body: "Corporate structuring, tax compliance and CSR programs for fast-scaling tech firms entering African markets.",
  },
  {
    icon: Landmark,
    name: "Banks & Financial Institutions",
    body: "ESG reporting, sustainability advisory and compliance support aligned to regulatory expectations.",
  },
  {
    icon: HeartHandshake,
    name: "NGOs & Foundations",
    body: "Grant-compliant financial management, monitoring & evaluation, and donor-ready reporting.",
  },
  {
    icon: Globe2,
    name: "Development Agencies",
    body: "Field coordination, M&E and evidence-based reporting for multi-country development programs.",
  },
  {
    icon: Factory,
    name: "Manufacturing & FMCG",
    body: "Statutory compliance, financial reporting and community/environmental impact programs.",
  },
  {
    icon: Radio,
    name: "Telecommunications",
    body: "Large-scale CSR rollout support and financial governance for regulated operators.",
  },
  {
    icon: Zap,
    name: "Energy & Infrastructure",
    body: "ESG advisory and stakeholder engagement for capital-intensive, community-facing projects.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Education",
    body: "Program design, impact measurement and financial oversight for mission-driven institutions.",
  },
  {
    icon: Scale,
    name: "Government & Public Sector",
    body: "Policy-aligned advisory and structured reporting for public sector partnerships.",
  },
];

export function IndustriesDetailGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
          {INDUSTRIES.map(({ icon: Icon, name, body }) => (
            <div key={name} className="bg-ivory p-8 flex flex-col gap-4">
              <Icon size={24} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-display text-[17px] text-charcoal leading-snug">
                {name}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-gray">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
