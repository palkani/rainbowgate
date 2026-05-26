/**
 * Static export config for GitHub Pages.
 *
 * The site is exported to ./out as fully static HTML so it can be served from
 * GitHub Pages (no Node server). On Pages the project lives under /<repo>/, so
 * basePath/assetPrefix are applied when PAGES=true (set by the deploy
 * workflow). Local `npm run dev` runs at / with no prefix.
 *
 * NEXT_PUBLIC_BASE_PATH mirrors basePath for client code (see lib/asset.ts) —
 * next/image doesn't add basePath to unoptimized images, so we prepend it.
 *
 * NOTE: static hosting has no server, so there is no /api/contact route — the
 * contact form opens the visitor's email client via mailto instead. To run a
 * real backend, deploy to a Node host (e.g. Vercel) and restore an API route.
 */
const isPages = process.env.PAGES === "true";
const basePath = isPages ? "/rainbowgate" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // Required for `output: export` — no Image Optimization server at runtime.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
