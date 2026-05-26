# Client logos

`client-1.svg` … `client-6.svg` are **placeholder marks** for the homepage
"Trusted by teams across India" strip. Replace them with real client logos.

> ⚠️ Only use a client's logo with their written permission.

## How to swap

1. Add each logo here, ideally as a single-colour `.svg` or a transparent
   `.png` (the strip applies a grayscale filter that brightens to full colour
   on hover, so simple, solid logos look best).
2. Target roughly a **160 × 48** display box; the strip caps height at
   `max-h-12` and preserves aspect ratio.
3. Update the `clients` array in
   [`components/TrustStrip.tsx`](../../components/TrustStrip.tsx) with the new
   file paths and real company names (the `name` is used for alt text).

Keep it to **six** logos for a balanced single row on desktop.
