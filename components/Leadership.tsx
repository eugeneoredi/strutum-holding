import { UserRound } from "lucide-react";

// PLACEHOLDER: brief says "include executive profiles when ready."
// Replace these three slots with real leadership photos, names, titles
// and short bios once the client supplies them.
const PLACEHOLDER_COUNT = 3;

export function Leadership() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-[12px] tracking-[0.2em] text-gold font-semibold mb-4">
          LEADERSHIP
        </p>
        <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.15] text-charcoal max-w-lg text-balance">
          Executive profiles to be added.
        </h2>
        <p className="mt-4 text-[14px] text-gray max-w-md">
          This section is reserved for leadership photos, names, titles and
          short bios — layout is ready for content once supplied.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div key={i} className="border border-dashed border-charcoal/20 p-7 text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-ivory border border-charcoal/10 flex items-center justify-center">
                <UserRound size={30} className="text-gray/50" strokeWidth={1.2} />
              </div>
              <p className="font-display text-[16px] text-charcoal/40 mt-5">
                Executive Name
              </p>
              <p className="text-[12px] text-gray/50 mt-1">Title</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
