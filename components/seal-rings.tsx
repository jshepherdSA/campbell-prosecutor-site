import { cn } from "@/lib/utils";

// Radii in viewBox units, where 200 is the seal's own radius. Size the SVG at
// four times the seal (`size-[400%]` inside a seal-sized box) and the first
// ring lands just outside the seal's edge. Pairs sit 12 units apart to restate
// the seal's double ring; opacity falls off with distance.
const rings = [
  { r: 224, opacity: 0.42 },
  { r: 236, opacity: 0.2 },
  { r: 304, opacity: 0.3 },
  { r: 384, opacity: 0.24 },
  { r: 396, opacity: 0.12 },
  { r: 476, opacity: 0.18 },
  { r: 568, opacity: 0.14 },
  { r: 580, opacity: 0.07 },
  { r: 672, opacity: 0.09 },
  { r: 776, opacity: 0.05 },
];

/**
 * "The rings": concentric hairlines radiating from the seal. Decorative only.
 * Size and position it with `className`; color comes from `currentColor`.
 */
export function SealRings({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="-800 -800 1600 1600"
      fill="none"
      className={cn("pointer-events-none text-silver-400", className)}
    >
      {rings.map(({ r, opacity }) => (
        <circle
          key={r}
          r={r}
          stroke="currentColor"
          strokeOpacity={opacity}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
