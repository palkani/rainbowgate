# Rainbow Gate Corporate Gifts — Website

A premium, production-ready marketing site for **Rainbow Gate Corporate Gifts**,
a B2B corporate gifting company in Chennai, India. Built with Next.js 14 (App
Router), TypeScript, and Tailwind CSS — designed to deploy to Vercel as-is.

> **Tagline:** _Corporate gifts your team will actually use._

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS 3** with design tokens in `tailwind.config.ts` + `app/globals.css`
- **next/font** (DM Serif Display for headings, Inter for everything else — self-hosted, no CDN)
- **next/image** for all imagery
- **lucide-react** for icons
- React Server Components by default; `"use client"` only for the mobile menu and contact form

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The site renders immediately with branded
placeholder imagery — no API keys or external services required.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (next/core-web-vitals)
```

---

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, JSON-LD, Header/Footer/WhatsApp
  page.tsx            Homepage (all 12 sections)
  products/page.tsx   Catalog, grouped by category (anchors: /products#drinkware …)
  about/page.tsx      About / story / stats
  contact/page.tsx    Contact page (supports ?product=… prefill)
  api/contact/route.ts  Quote form handler (logs to console — see TODOs)
  robots.ts, sitemap.ts, icon.svg
  globals.css         Tailwind layers + CSS variables (the brand tokens)
components/           Header, Hero, TrustStrip, Categories, WelcomeKit,
                      HowItWorks, FeaturedProducts, ProductCard, WhyUs,
                      Testimonials, AboutSnippet, ContactSection, Footer,
                      WhatsAppFloatingButton, LeafMotif (decorative sprig)
lib/
  site.ts             Company constants (phone, email, address, WhatsApp, social)
  products.ts         Typed product & category data
public/
  hero.svg, team.svg, og-image.png
  products/           Product & category placeholders (+ README)
  logos/              Client logo placeholders (+ README)
scripts/
  gen-placeholders.mjs  Regenerates all placeholder assets
```

---

## Customising the site

### 1. Company details

Everything is centralised in [`lib/site.ts`](lib/site.ts) — phone, email,
WhatsApp link, address, LinkedIn, founding year. Edit once; it propagates to the
header, footer, contact section, WhatsApp button, and JSON-LD schema.

**Set your production domain** here too (`site.url`) — it drives canonical URLs,
the sitemap, robots, and Open Graph URLs.

### 2. Products & categories

Edit [`lib/products.ts`](lib/products.ts):

- Add a product by appending to the `products` array. Set `categorySlug` to a
  valid category and `featured: true` to surface it on the homepage grid.
- `fromPrice` is the starting per-unit price (INR); `moq` is the minimum order
  quantity. The UI renders `From ₹X · MOQ Y pcs` automatically.
- Always write descriptive `imageAlt` text.

### 3. Images

The site ships with branded **placeholder** images so it looks complete out of
the box. To use real photography:

- **Products & category tiles:** see [`public/products/README.md`](public/products/README.md)
  for the naming convention and swap steps.
- **Client logos:** see [`public/logos/README.md`](public/logos/README.md).
- **Hero / team:** replace `public/hero.svg` and `public/team.svg`, then update
  the `src` in `components/Hero.tsx` / `components/AboutSnippet.tsx` /
  `app/about/page.tsx` if you change the file extension.
- **Social card:** replace `public/og-image.png` with a 1200 × 630 image
  (ideally one that includes a headline — see TODOs).

To recolour or regenerate the placeholders, edit and re-run:

```bash
node scripts/gen-placeholders.mjs
```

Once **all** images are real raster files, you can delete the
`dangerouslyAllowSVG` block in `next.config.mjs`.

### 4. Logo

The official logo — three gothic arches (blue/orange/red), the Star of David,
and the italic "Rainbowgate" wordmark — lives as the canonical asset at
[`public/logo.svg`](public/logo.svg) (the full vertical lockup, good for print
and social).

[`components/Logo.tsx`](components/Logo.tsx) is the **horizontal** lockup built
from the same arch paths, star, and colours, used in the header (`tone="dark"`)
and footer (`tone="light"`, lightened for contrast on the dark background). The
favicon in [`app/icon.svg`](app/icon.svg) is the emblem on a white chip. If you
revise the brand SVG, update the arch `d` paths and colours in those two files
to match.

### 5. Brand tokens

Colours live as CSS variables in [`app/globals.css`](app/globals.css) and are
wired into Tailwind in [`tailwind.config.ts`](tailwind.config.ts). Change a hex
value in one place and the whole site follows.

| Token             | Value     | Use                              |
| ----------------- | --------- | -------------------------------- |
| `bg`              | `#FAF8F3` | Page background (warm ivory)     |
| `surface`         | `#FFFFFF` | Cards, alternating sections      |
| `ink` / `ink-muted` | `#1A1A1A` / `#4A4A4A` | Text                 |
| `brand` / `brand-soft` | `#1B4332` / `#2D5F4A` | Primary green   |
| `accent`          | `#C9A961` | Gold — highlights only           |
| `border`          | `#E8E4DC` | Hairlines, card borders          |

---

## SEO

- Per-page `title`/`description` with a title template (`%s | Rainbow Gate Corporate Gifts`).
- Open Graph + Twitter `summary_large_image` cards.
- Organization JSON-LD in `app/layout.tsx`.
- `robots.ts` + `sitemap.ts` generated from `site.url`.
- Exactly one `<h1>` per page; correct heading hierarchy throughout.

---

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), import the repo. Framework preset is
   auto-detected as **Next.js** — no configuration needed.
3. Deploy. (Or from the CLI: `npm i -g vercel && vercel deploy`.)
4. Add your custom domain and update `site.url` in `lib/site.ts` to match.

No environment variables are required for the current build.

---

## Remaining TODOs

These are intentionally left for the client/next developer:

1. **Real form backend.** `app/api/contact/route.ts` validates and logs leads
   but does not send email yet. Wire up [Resend](https://resend.com) or
   SendGrid (a ready-to-paste Resend snippet is in the route file) and add the
   API key as a Vercel environment variable.
2. **Real imagery.** Swap every placeholder in `public/` for real product
   photography, client logos, a team photo, and a text-bearing OG image. In
   particular, shoot the flagship **Employee Welcome Kit**
   (`public/products/employee-welcome-kit.svg`) and its eco components, which
   are featured in their own homepage spotlight section.
3. **Real testimonials & client logos.** The testimonials in
   `components/Testimonials.tsx` and the logos in the trust strip are
   placeholders — replace with attributable, permission-cleared real ones.
4. _(Optional)_ **CMS for products.** `lib/products.ts` is a simple typed file;
   move it behind a CMS (Sanity, Contentful) if non-developers need to edit the
   catalog.
```
