import Image from "next/image";

// Actual asset is 300x312 (not perfectly square) — keep width/height
// proportional to avoid distortion and the Next.js aspect-ratio warning.
const ASPECT = 300 / 312;

const SIZES = {
  sm: { mark: 30, gap: "gap-2.5", name: "text-[13px]", sub: "text-[8px] mt-0.5" },
  md: { mark: 40, gap: "gap-3", name: "text-[16px]", sub: "text-[9px] mt-1" },
  lg: { mark: 56, gap: "gap-4", name: "text-[22px]", sub: "text-[10px] mt-1" },
} as const;

export function Logo({
  variant = "dark",
  size = "md",
}: {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
}) {
  const text = variant === "dark" ? "#F8F7F2" : "#071827";
  const { mark, gap, name, sub } = SIZES[size];
  const markWidth = Math.round(mark * ASPECT);

  return (
    <div className={`flex items-center ${gap} select-none`}>
      <Image
        src="/logo-mark.png"
        alt="Strutum Holding"
        width={markWidth}
        height={mark}
        className="shrink-0"
        priority
      />
      <div className="leading-none">
        <div className={`font-display tracking-[0.14em] ${name}`} style={{ color: text }}>
          STRUTUM
        </div>
        <div
          className={`font-sans tracking-[0.35em] opacity-70 ${sub}`}
          style={{ color: text }}
        >
          HOLDING
        </div>
      </div>
    </div>
  );
}
