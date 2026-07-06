// PLACEHOLDER MARK
// The brief requires the client's supplied metallic crown/eagle logo asset.
// This component is a stand-in geometric mark only, so the layout can be
// previewed. Swap the <svg> below for the real logo file before launch.

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const stroke = variant === "dark" ? "#C8A45D" : "#0B2B26";
  const text = variant === "dark" ? "#F8F7F2" : "#071827";

  return (
    <div className="flex items-center gap-3 select-none">
      <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20 3 L24 14 L34 8 L28 18 L37 20 L28 22 L34 32 L24 26 L20 37 L16 26 L6 32 L12 22 L3 20 L12 18 L6 8 L16 14 Z"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="3.2" fill={stroke} />
      </svg>
      <div className="leading-none">
        <div
          className="font-display tracking-[0.14em] text-[15px]"
          style={{ color: text }}
        >
          STRUTUM
        </div>
        <div
          className="font-sans text-[9px] tracking-[0.35em] mt-1 opacity-70"
          style={{ color: text }}
        >
          HOLDING
        </div>
      </div>
    </div>
  );
}
