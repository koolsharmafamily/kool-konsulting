import type { APIRoute } from "astro";
import { SITE } from "../data/site.js";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /thanks

Sitemap: ${SITE.origin}/sitemap-index.xml
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
