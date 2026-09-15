// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Absolute URLs (canonical, Open Graph) come from SITE_URL when set, otherwise from
// the production URL Vercel injects at build time.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : undefined);

export default defineConfig({
  site,
  output: "static",
  integrations: [icon()],
  vite: { plugins: [tailwindcss()] },
  build: {
    // One page, ~6 KB of CSS: inlining it removes the only render-blocking request.
    inlineStylesheets: "always",
  },
});
