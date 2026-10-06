import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { serviceFamilies } from "@/data/brand-content";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/work";
import { labDemos } from "@/data/lab";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/lab",
    "/work",
    "/pricing",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    ...serviceFamilies.map((s) => "/services/" + s.slug),
    ...labDemos.map((d) => "/lab/" + d.slug),
    ...caseStudies.map((c) => "/work/" + c.slug),
    ...projects.filter((p) => !p.hidden).map((p) => "/work/" + p.slug),
  ];
  return [...new Set(routes)].map((route) => ({
    url: site.origin + route,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.6 : 0.8,
  }));
}
