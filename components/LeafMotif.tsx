/**
 * Decorative eucalyptus sprig — a subtle nod to Rainbow Gate's eco focus.
 * Purely ornamental: positioned by the parent, tinted via text color
 * (the leaves use `currentColor`), and hidden from assistive tech.
 *
 * Keep it restrained — low opacity, off to the side, never a focal point.
 */

// A single leaf pointing "up" from its origin.
const LEAF = "M0 0 C 7 -9 7 -24 0 -33 C -7 -24 -7 -9 0 0 Z";

// Leaves arranged in pairs along a gently curving stem.
const leaves: { x: number; y: number; r: number; s: number }[] = [
  { x: 60, y: 34, r: 0, s: 0.8 },
  { x: 60, y: 74, r: -38, s: 0.85 },
  { x: 60, y: 74, r: 38, s: 0.85 },
  { x: 59, y: 120, r: -44, s: 0.95 },
  { x: 61, y: 120, r: 44, s: 0.95 },
  { x: 58, y: 168, r: -48, s: 1.05 },
  { x: 62, y: 168, r: 48, s: 1.05 },
  { x: 57, y: 218, r: -52, s: 1.1 },
  { x: 63, y: 218, r: 52, s: 1.1 },
  { x: 56, y: 268, r: -55, s: 1.15 },
  { x: 64, y: 268, r: 55, s: 1.15 },
];

export default function LeafMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M60 312 C 50 240 70 150 60 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {leaves.map((leaf, i) => (
        <path
          key={i}
          d={LEAF}
          transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}
        />
      ))}
    </svg>
  );
}
