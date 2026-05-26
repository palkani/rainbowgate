/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // The placeholder photos in /public are first-party SVGs we generate
    // ourselves (see scripts/gen-placeholders.mjs). next/image refuses to
    // serve SVG unless explicitly allowed, so we opt in AND lock it down
    // with a strict CSP so an SVG can never execute script.
    // Once real raster (.jpg/.webp) product photos replace the placeholders,
    // this block can be removed.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
