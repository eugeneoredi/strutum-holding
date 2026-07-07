import { Briefcase, Users, UserCheck, GraduationCap } from "lucide-react";

const TYPES = [
  {
    icon: Briefcase,
    name: "Full-Time Roles",
    body: "Core team positions across Strutum Impact and Strutum Advisory.",
  },
  {
    icon: Users,
    name: "Taskers & Field Associates",
    body: "Field coordination and program delivery support, engaged per project.",
  },
  {
    icon: UserCheck,
    name: "Independent Consultants",
    body: "Specialist advisory support engaged on a scope-defined basis.",
  },
  {
    icon: GraduationCap,
    name: "Internships",
    body: "Structured placements for students and early-career professionals.",
  },
];

// PLACEHOLDER: no live openings yet. Replace this section with real
// role listings (title, division, location, apply link) once available.
export function OpenRoles() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          WAYS TO WORK WITH US
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-lg text-balance">
          Four ways to join the Strutum talent pipeline.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TYPES.map(({ icon: Icon, name, body }) => (
            <div key={name} className="bg-white border border-charcoal/10 p-6">
              <Icon size={22} className="text-gold" strokeWidth={1.5} />
              <h3 className="font-display text-[16px] text-charcoal mt-4 leading-snug">
                {name}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-gray">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-dashed border-charcoal/20 bg-white p-8 text-center">
          <p className="text-[14px] text-gray">
            There are no live openings posted at this time. We welcome
            general applications from all four categories above — submit
            your details below and we'll reach out when a fit opens up.
          </p>
        </div>
      </div>
    </section>
  );
}
