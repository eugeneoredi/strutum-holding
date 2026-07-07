import {
  ShieldCheck,
  ClipboardCheck,
  Award,
  Target,
  Lock,
  Globe2,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    name: "Integrity",
    body: "We operate transparently, with honest reporting even when the news is difficult.",
  },
  {
    icon: ClipboardCheck,
    name: "Accountability",
    body: "Every engagement has clear ownership, timelines and deliverables.",
  },
  {
    icon: Award,
    name: "Excellence",
    body: "Institutional-grade work, whether the client is a startup or a multinational.",
  },
  {
    icon: Target,
    name: "Measurable Impact",
    body: "We define success in terms clients can report to their own stakeholders.",
  },
  {
    icon: Lock,
    name: "Confidentiality",
    body: "Financial and organizational information is handled with strict discretion.",
  },
  {
    icon: Globe2,
    name: "African Capability",
    body: "Local grounding and field presence, delivered to international standards.",
  },
];

export function CoreValues() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          OUR VALUES
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-lg text-balance">
          The standard behind every engagement.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map(({ icon: Icon, name, body }) => (
            <div key={name} className="bg-white border border-charcoal/10 p-7">
              <Icon size={22} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-display text-[18px] text-charcoal mt-4">
                {name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
