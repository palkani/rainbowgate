/**
 * Prefix a public asset path with the deployment base path.
 *
 * On GitHub Pages the site is served from /<repo>/, so local asset URLs need
 * that prefix. `next/image` does not add basePath automatically when images
 * are unoptimized, so we prepend it ourselves for every image `src`.
 *
 * NEXT_PUBLIC_BASE_PATH is set in next.config.mjs ("" locally, "/rainbowgate"
 * for the Pages build).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
