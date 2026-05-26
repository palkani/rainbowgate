/**
 * Rainbow Gate brand lockup — horizontal.
 *
 * Built from the official logo (public/logo.svg): the three gothic arches
 * (blue / orange / red), the Star of David, and the italic "Rainbowgate"
 * wordmark. The source file is a tall vertical lockup; this is the horizontal
 * arrangement used in the header and footer.
 *
 *   tone="dark"  → for light backgrounds (header)  — wordmark in brand blue/orange
 *   tone="light" → for dark backgrounds (footer)   — lightened for contrast
 *
 * Presentational only — wrap in a <Link> where needed.
 */
export default function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const uid = tone;
  const star = tone === "light" ? "#9DC0E6" : "#2C5F94";
  const rainbowColor = tone === "light" ? "#8FB6E2" : "#2C5F94";
  const gateColor = tone === "light" ? "#F4A14A" : "#E37416";

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      {/* Emblem — exact arch paths from the official logo, cropped to fit */}
      <svg
        viewBox="105 55 390 430"
        className="h-9 w-auto shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`blue-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A85C2" />
            <stop offset="100%" stopColor="#2C5F94" />
          </linearGradient>
          <linearGradient id={`orange-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4A14A" />
            <stop offset="100%" stopColor="#E37416" />
          </linearGradient>
          <linearGradient id={`red-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EC5A4D" />
            <stop offset="100%" stopColor="#C73A2C" />
          </linearGradient>
        </defs>
        <path
          d="M 120 470 L 120 320 A 200 280 0 0 1 300 70 A 200 280 0 0 1 480 320 L 480 470"
          stroke={`url(#blue-${uid})`}
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 175 470 L 175 335 A 145 240 0 0 1 300 130 A 145 240 0 0 1 425 335 L 425 470"
          stroke={`url(#orange-${uid})`}
          strokeWidth="17"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 230 470 L 230 350 A 90 200 0 0 1 300 190 A 90 200 0 0 1 370 350 L 370 470"
          stroke={`url(#red-${uid})`}
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        {/* Star of David — filled so it stays legible at small sizes */}
        <g transform="translate(300, 400)" fill={star}>
          <path d="M 0 -32 L 28 16 L -28 16 Z" />
          <path d="M 0 32 L 28 -16 L -28 -16 Z" />
        </g>
      </svg>

      {/* Wordmark — Georgia italic, matching the official lockup */}
      <span
        className="text-[1.6rem] leading-none tracking-tight"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontWeight: 500,
        }}
      >
        <span style={{ color: rainbowColor }}>Rainbow</span>
        <span style={{ color: gateColor }}>gate</span>
      </span>
    </span>
  );
}
