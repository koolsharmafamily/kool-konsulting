import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/data/site.js";

// Static output: every page is pre-rendered to HTML at build time, so the full
// body content is present with JavaScript disabled.
export default defineConfig({
  site: SITE.origin,
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap({ filter: (page) => !page.includes("/thanks") })],
});
