import { Quote } from "lucide-react";

// PLACEHOLDER: replace with real client testimonials (quote, name, title,
// organization) once available.
const PLACEHOLDER_COUNT = 2;

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          WHAT CLIENTS SAY
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-lg text-balance">
          Testimonials, added with client permission.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="border border-dashed border-charcoal/20 p-8"
            >
              <Quote size={22} className="text-gray/30" strokeWidth={1.5} />
              <p className="font-display text-[17px] text-charcoal/30 mt-4 leading-relaxed">
                Client testimonial text will appear here once received.
              </p>
              <p className="text-[12.5px] text-gray/40 mt-5">
                Name, Title — Organization
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
