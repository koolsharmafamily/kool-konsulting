import { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/credentials", "/thanks"],
    },
    sitemap: `${site.origin}/sitemap.xml`,
  };
}
