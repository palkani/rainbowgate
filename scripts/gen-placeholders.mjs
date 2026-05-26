/**
 * Generates branded placeholder assets so the site renders with zero
 * external dependencies (no broken images) out of the box.
 *
 * Run with:  node scripts/gen-placeholders.mjs
 *
 * Product & category tiles use clean gold line-art illustrations of each
 * item on a deep-green gradient — cozy and premium, and a clear cue for
 * what real photo belongs there. Hero/team use the "gate" arch motif.
 *
 * Outputs:
 *   public/hero.svg, public/team.svg
 *   public/products/category-*.svg   (one per category)
 *   public/products/<slug>.svg        (one per product)
 *   public/logos/client-*.svg         (6 client logo placeholders)
 *   public/og-image.png               (1200x630 raster social card)
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public");

const INK = "#1A1A1A";
const GOLD = "#C9A961";

const GRADIENTS = [
  ["#1B4332", "#2D5F4A"],
  ["#143A2C", "#1B4332"],
  ["#2D5F4A", "#1B4332"],
  ["#1B4332", "#27543F"],
];

function esc(s) {
  return String(s).replace(/[<>&]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;"
  );
}

/**
 * Line-art glyphs, each drawn centred on the origin within roughly [-45, 45].
 * Stroke colour/width is applied by the wrapping <g>. Small solid accents
 * declare their own fill.
 */
const GLYPHS = {
  bottle: `
    <rect x="-8" y="-44" width="16" height="9" rx="2" />
    <path d="M-8 -35 L-15 -25 Q-17 -21 -17 -15 L-17 34 Q-17 43 -8 43 L8 43 Q17 43 17 34 L17 -15 Q17 -21 15 -25 L8 -35 Z" />
    <line x1="-17" y1="-3" x2="17" y2="-3" />`,
  cup: `
    <rect x="-18" y="-40" width="36" height="9" rx="2" />
    <path d="M-15 -31 L15 -31 L10 43 L-10 43 Z" />
    <line x1="-13" y1="2" x2="13" y2="2" />`,
  notebook: `
    <rect x="-22" y="-32" width="44" height="64" rx="4" />
    <line x1="-12" y1="-32" x2="-12" y2="32" />
    <line x1="-4" y1="-12" x2="14" y2="-12" />
    <line x1="-4" y1="0" x2="14" y2="0" />
    <line x1="-4" y1="12" x2="14" y2="12" />`,
  tote: `
    <path d="M-24 -8 L24 -8 L20 40 Q20 44 16 44 L-16 44 Q-20 44 -20 40 Z" />
    <path d="M-12 -8 L-12 -18 Q-12 -28 0 -28 Q12 -28 12 -18 L12 -8" />`,
  messenger: `
    <rect x="-26" y="-2" width="52" height="42" rx="4" />
    <path d="M-26 6 L-26 -10 Q-26 -16 -20 -16 L20 -16 Q26 -16 26 -10 L26 6 Z" />
    <path d="M-22 -12 Q0 -44 22 -12" />
    <rect x="-6" y="10" width="12" height="11" rx="2" />`,
  gift: `
    <rect x="-24" y="-6" width="48" height="40" rx="3" />
    <rect x="-28" y="-18" width="56" height="14" rx="3" />
    <line x1="0" y1="-18" x2="0" y2="34" />
    <path d="M0 -18 Q-12 -34 -18 -28 Q-22 -24 -8 -18" />
    <path d="M0 -18 Q12 -34 18 -28 Q22 -24 8 -18" />`,
  pad: `
    <circle cx="0" cy="0" r="30" />
    <circle cx="0" cy="0" r="16" />
    <path d="M3 -10 L-4 1 L3 1 L-3 11" fill="${GOLD}" stroke="none" />`,
  pen: `
    <path d="M30 -32 L-16 22" />
    <path d="M-16 22 L-30 36 L-24 16 Z" />
    <line x1="14" y1="-16" x2="26" y2="-28" />`,
  usb: `
    <rect x="-6" y="-15" width="32" height="30" rx="4" />
    <rect x="-30" y="-9" width="22" height="18" rx="2" />
    <line x1="-28" y1="-3" x2="-22" y2="-3" />
    <line x1="-28" y1="3" x2="-22" y2="3" />
    <circle cx="14" cy="0" r="3" />`,
  umbrella: `
    <path d="M-38 2 Q-38 -36 0 -36 Q38 -36 38 2 Q26 -8 13 2 Q0 -8 -13 2 Q-26 -8 -38 2 Z" />
    <line x1="0" y1="-36" x2="0" y2="36" />
    <path d="M0 36 Q0 44 8 44 Q14 44 14 38" />`,
  ball: `
    <circle cx="0" cy="0" r="32" />
    <path d="M-16 -20 Q-26 -10 -22 4" />`,
  cap: `
    <path d="M-26 6 Q-26 -28 2 -28 Q24 -28 24 6 Z" />
    <path d="M24 6 L44 12 Q46 14 44 16 L24 12" />
    <circle cx="-2" cy="-28" r="2.6" fill="${GOLD}" stroke="none" />`,
  leaf: `
    <path d="M0 -36 C18 -22 18 6 0 34 C-18 6 -18 -22 0 -36 Z" />
    <line x1="0" y1="-30" x2="0" y2="30" />
    <path d="M0 -14 L10 -20" />
    <path d="M0 -2 L11 -8" />
    <path d="M0 10 L9 5" />`,
  tray: `
    <path d="M-28 -4 L28 -4 L24 34 Q24 38 20 38 L-20 38 Q-24 38 -24 34 Z" />
    <line x1="-8" y1="-4" x2="-8" y2="38" />
    <line x1="10" y1="-4" x2="10" y2="38" />
    <line x1="16" y1="-4" x2="22" y2="-30" />
    <circle cx="22" cy="-32" r="2.6" fill="${GOLD}" stroke="none" />`,
};

/** Gate arch motif used on hero / team visuals. */
function gateMotif(w, h) {
  const cx = w / 2;
  const archCy = h * 0.42;
  const r = Math.min(w, h) * 0.16;
  return `<g fill="none" stroke="${GOLD}" stroke-opacity="0.5" stroke-width="${Math.max(
    2,
    Math.round(w / 360)
  )}">
    <path d="M ${cx - r} ${archCy} A ${r} ${r} 0 0 1 ${cx + r} ${archCy}"/>
    <line x1="${cx - r}" y1="${archCy}" x2="${cx - r}" y2="${h * 0.66}"/>
    <line x1="${cx + r}" y1="${archCy}" x2="${cx + r}" y2="${h * 0.66}"/>
  </g>
  <circle cx="${cx}" cy="${archCy - r * 0.55}" r="${Math.max(
    3,
    w / 240
  )}" fill="${GOLD}" fill-opacity="0.8"/>`;
}

function glyphMotif(key, w, h) {
  const min = Math.min(w, h);
  const s = (0.4 * min) / 90;
  return `<g transform="translate(${w / 2} ${h * 0.4}) scale(${s})"
    fill="none" stroke="${GOLD}" stroke-opacity="0.9" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">${GLYPHS[key] ?? ""}</g>`;
}

function placeholderSVG({ w, h, label, eyebrow = "Rainbow Gate", variant = 0, glyph }) {
  const [c1, c2] = GRADIENTS[variant % GRADIENTS.length];
  const cx = w / 2;
  const labelSize = Math.round(Math.min(w, h) * 0.055);
  const eyebrowSize = Math.round(Math.min(w, h) * 0.024);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  ${glyph ? glyphMotif(glyph, w, h) : gateMotif(w, h)}
  ${
    label
      ? `<text x="${cx}" y="${h * 0.82}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${labelSize}" fill="#FFFFFF" fill-opacity="0.92">${esc(
          label
        )}</text>
  <text x="${cx}" y="${h * 0.88}" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="${eyebrowSize}" letter-spacing="${eyebrowSize * 0.18}" fill="${GOLD}" fill-opacity="0.9">${esc(
          eyebrow.toUpperCase()
        )}</text>`
      : ""
  }
</svg>
`;
}

function logoSVG({ name, color }) {
  const initial = name.charAt(0).toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 56" width="220" height="56" role="img">
  <g fill="${color}">
    <rect x="0" y="14" width="28" height="28" rx="6"/>
    <text x="14" y="34" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">${initial}</text>
    <text x="40" y="36" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="-0.5">${esc(
      name
    )}</text>
  </g>
</svg>
`;
}

function write(relPath, contents) {
  const full = join(root, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, contents);
  console.log("wrote", join("public", relPath));
}

// ---- Hero / team (gate motif) -------------------------------------------

write("hero.svg", placeholderSVG({ w: 1600, h: 1200, label: "", eyebrow: "" }));
write(
  "team.svg",
  placeholderSVG({ w: 1200, h: 1200, label: "Our workshop", variant: 1 })
);

// ---- Category tiles (3:4) -----------------------------------------------

const categoryTiles = [
  ["category-drinkware", "Drinkware", "cup"],
  ["category-eco-friendly", "Eco-Friendly", "leaf"],
  ["category-bags", "Bags", "tote"],
  ["category-notebooks", "Notebooks", "notebook"],
  ["category-gift-sets", "Gift Sets", "gift"],
  ["category-tech-desk", "Tech & Desk", "usb"],
  ["category-apparel", "Apparel", "cap"],
  ["category-writing", "Writing", "pen"],
  ["category-lifestyle", "Lifestyle", "umbrella"],
];
categoryTiles.forEach(([slug, label, glyph], i) => {
  write(
    `products/${slug}.svg`,
    placeholderSVG({ w: 900, h: 1200, label, variant: i, glyph })
  );
});

// ---- Product tiles (1:1) ------------------------------------------------

const productTiles = [
  ["bamboo-water-bottle", "Bamboo Bottle", "bottle"],
  ["eco-friendly-gift-set", "Eco Gift Set", "gift"],
  ["premium-notebook", "Premium Notebook", "notebook"],
  ["branded-tote-bag", "Tote Bag", "tote"],
  ["steel-tumbler-set", "Tumbler Set", "cup"],
  ["desk-organizer", "Desk Organizer", "tray"],
  ["wireless-charger", "Wireless Charger", "pad"],
  ["festive-gift-hamper", "Gift Hamper", "gift"],
  ["employee-welcome-kit", "Welcome Kit", "gift"],
  ["glass-bottle-jute-sleeve", "Glass Bottle", "bottle"],
  ["bamboo-coffee-cup", "Bamboo Cup", "cup"],
  ["cork-cover-notebook", "Cork Notebook", "notebook"],
  ["bamboo-pen", "Bamboo Pen", "pen"],
  ["usb-flash-drive", "USB Drive", "usb"],
  ["promotional-umbrella", "Umbrella", "umbrella"],
  ["logo-pen", "Logo Pen", "pen"],
  ["stress-ball", "Stress Ball", "ball"],
  ["sports-water-bottle", "Sports Bottle", "bottle"],
  ["laptop-messenger-bag", "Messenger Bag", "messenger"],
  ["baseball-cap", "Baseball Cap", "cap"],
];
productTiles.forEach(([slug, label, glyph], i) => {
  write(
    `products/${slug}.svg`,
    placeholderSVG({ w: 1000, h: 1000, label, variant: i, glyph })
  );
});

// ---- Client logo placeholders -------------------------------------------

const logos = [
  ["Northwind", "#1B4332"],
  ["Vertex", "#2D5F4A"],
  ["Lumen", "#C9A961"],
  ["Meridian", "#1B4332"],
  ["Caldera", "#2D5F4A"],
  ["Atlas", INK],
];
logos.forEach(([name, color], i) => {
  write(`logos/client-${i + 1}.svg`, logoSVG({ name, color }));
});

// ---- OG image (real raster PNG, 1200x630) -------------------------------

function makeOgPng(width = 1200, height = 630) {
  const c1 = [0x1b, 0x43, 0x32];
  const c2 = [0x14, 0x29, 0x20];
  const goldRGB = [0xc9, 0xa9, 0x61];
  const cx = width / 2;
  const archCy = height * 0.4;
  const r = height * 0.2;
  const barOffset = r;
  const barTop = archCy;
  const barBottom = height * 0.72;
  const stroke = 5;
  const raw = Buffer.alloc(height * (1 + width * 4));

  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 4);
    raw[rowStart] = 0;
    const t = y / (height - 1);
    const br = Math.round(c1[0] + (c2[0] - c1[0]) * t);
    const bg = Math.round(c1[1] + (c2[1] - c1[1]) * t);
    const bb = Math.round(c1[2] + (c2[2] - c1[2]) * t);
    for (let x = 0; x < width; x++) {
      let R = br, G = bg, B = bb;
      const dxA = x - cx;
      const dyA = y - archCy;
      if (dyA <= 0) {
        const dist = Math.sqrt(dxA * dxA + dyA * dyA);
        if (Math.abs(dist - barOffset) <= stroke) [R, G, B] = blend([R, G, B], goldRGB, 0.55);
      }
      if (y >= barTop && y <= barBottom) {
        if (
          Math.abs(x - (cx - barOffset)) <= stroke ||
          Math.abs(x - (cx + barOffset)) <= stroke
        )
          [R, G, B] = blend([R, G, B], goldRGB, 0.55);
      }
      if (Math.abs(y - height * 0.86) <= 1.5) [R, G, B] = blend([R, G, B], goldRGB, 0.7);
      const p = rowStart + 1 + x * 4;
      raw[p] = R;
      raw[p + 1] = G;
      raw[p + 2] = B;
      raw[p + 3] = 255;
    }
  }

  const idat = deflateSync(raw, { level: 9 });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function blend(base, over, alpha) {
  return [
    Math.round(base[0] * (1 - alpha) + over[0] * alpha),
    Math.round(base[1] * (1 - alpha) + over[1] * alpha),
    Math.round(base[2] * (1 - alpha) + over[2] * alpha),
  ];
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])) >>> 0, 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

writeFileSync(join(root, "og-image.png"), makeOgPng());
console.log("wrote public/og-image.png");
console.log("\nDone.");
