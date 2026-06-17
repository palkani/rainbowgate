/**
 * Static export config for GitHub Pages on the custom domain
 * www.rainbowgate.online (apex `rainbowgate.online` 301-redirects to www).
 *
 * The custom domain serves the site at the ROOT, so no basePath/assetPrefix
 * is needed. The custom domain itself is held by public/CNAME, which Pages
 * reads from the deployed artifact on every build.
 *
 * NOTE: static hosting has no server, so there is no /api/contact route — the
 * contact form opens the visitor's email client via mailto instead. To run a
 * real backend, deploy to a Node host (e.g. Vercel) and restore an API route.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // Required for `output: export` — no Image Optimization server at runtime.
    unoptimized: true,
  },
  env: {
    // Kept for the asset() helper; empty since the site is at the domain root.
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
