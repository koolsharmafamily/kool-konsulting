import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { servicesData } from "@/data/services";
import { projects } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.origin;

  const coreRoutes = [
    "",
    "/services",
    "/work",
    "/pricing",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projects
    .filter((p) => !p.hidden)
    .map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...coreRoutes, ...serviceRoutes, ...projectRoutes];
}
