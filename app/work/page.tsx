import React from "react";
import Link from "next/link";
import { getClientProjects, getEarlierProjects } from "@/data/work";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Work & Case Studies | Kool Konsulting",
  description:
    "Real software, websites, apps, and automations built for Indian businesses. From construction sites to mandi wholesale shops.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Case Studies | Kool Konsulting",
    description:
      "Real software, websites, apps, and automations built for Indian businesses. From construction sites to mandi wholesale shops.",
    url: `${site.origin}/work`,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Case Studies | Kool Konsulting",
    description:
      "Real software, websites, apps, and automations built for Indian businesses. From construction sites to mandi wholesale shops.",
    images: ["/opengraph-image"],
  },
};

export default function WorkPage({
  searchParams,
}: {
  searchParams: { service?: string; industry?: string };
}) {
  const clientProjects = getClientProjects();
  const earlierProjects = getEarlierProjects();
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
  ]);

  const selectedService = searchParams.service;
  const selectedIndustry = searchParams.industry;

  const filteredClientProjects = clientProjects.filter((p) => {
    if (selectedService && !p.services.includes(selectedService as any)) {
      return false;
    }
    if (selectedIndustry && p.industry !== selectedIndustry) {
      return false;
    }
    return true;
  });

  const services = ["websites", "apps", "software", "automation"];
  const industries = ["construction", "hospitality", "trading", "retail", "education", "services"];

  return (
    <div className="bg-bg min-h-screen">
      <JsonLd data={breadcrumbs} />
      
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-surface border-b border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-kk-indigo bg-kk-indigo-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
              Proven Deliveries
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight font-stretch-h1">
              Work that replaced the register.
            </h1>
            <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed">
              Real systems running in real businesses across Nagpur and India. No invented client logos, no inflated case study numbers.
            </p>
          </div>

          {/* Filter Chips (Work as plain URL links for no-JS support) */}
          <div className="mt-8 pt-6 border-t border-line space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-ink-3 mr-1">Service:</span>
              <Link
                href="/work"
                className={`px-3 py-1 rounded-full border transition-colors ${
                  !selectedService
                    ? "bg-ink text-white border-ink font-semibold"
                    : "bg-surface text-ink-2 border-line hover:text-ink"
                }`}
              >
                All
              </Link>
              {services.map((svc) => (
                <Link
                  key={svc}
                  href={`/work?service=${svc}${selectedIndustry ? `&industry=${selectedIndustry}` : ""}`}
                  className={`px-3 py-1 rounded-full border transition-colors capitalize ${
                    selectedService === svc
                      ? "bg-ink text-white border-ink font-semibold"
                      : "bg-surface text-ink-2 border-line hover:text-ink"
                  }`}
                >
                  {svc}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-ink-3 mr-1">Industry:</span>
              {industries.map((ind) => (
                <Link
                  key={ind}
                  href={`/work?industry=${ind}${selectedService ? `&service=${selectedService}` : ""}`}
                  className={`px-3 py-1 rounded-full border transition-colors capitalize ${
                    selectedIndustry === ind
                      ? "bg-ink text-white border-ink font-semibold"
                      : "bg-surface text-ink-2 border-line hover:text-ink"
                  }`}
                >
                  {ind}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Client Work Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredClientProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-surface border border-line rounded-stage p-6 md:p-8 flex flex-col justify-between hover:shadow-floating transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-kk-indigo">
                      {project.services.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" · ")}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-display font-bold text-ink group-hover:text-kk-indigo transition-colors leading-snug font-stretch-h3">
                    {project.title}
                  </h2>

                  <div className="text-xs text-ink-3 font-medium">
                    {project.client} {project.place ? `· ${project.place}` : ""}
                  </div>

                  <p className="text-sm text-ink-2 leading-relaxed">
                    {project.problem}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-line text-xs">
                    <span className="text-[11px] font-semibold text-ink-3 block">
                      Key highlights:
                    </span>
                    {project.built.slice(0, 3).map((item, i) => (
                      <div key={i} className="text-ink-2 flex items-start gap-2">
                        <span className="text-leaf">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-line mt-6 flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-sm font-semibold text-kk-indigo group-hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read complete case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-ink-3 hover:text-ink inline-flex items-center gap-1"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredClientProjects.length === 0 && (
            <div className="text-center py-16 bg-surface border border-line rounded-stage p-8">
              <p className="text-ink-2 text-base">
                No active projects match this specific filter.
              </p>
              <Link
                href="/work"
                className="mt-3 inline-block text-xs font-semibold text-kk-indigo underline"
              >
                Clear all filters
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Earlier Work & Experiments Section */}
      <section className="py-16 bg-surface border-t border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-ink">
              Earlier work and experiments
            </h2>
            <p className="text-sm text-ink-3">
              Corporate internships, prior startup roles, and technical prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlierProjects.map((earlier) => (
              <div
                key={earlier.slug}
                className="p-6 rounded-card bg-bg border border-line space-y-3"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="text-ink-3 font-semibold">
                    {earlier.services.join(", ")}
                  </span>
                  <StatusBadge status={earlier.status} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink leading-snug">
                  {earlier.title}
                </h3>
                <p className="text-xs text-ink-2 line-clamp-3 leading-relaxed">
                  {earlier.problem}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/work/${earlier.slug}`}
                    className="text-xs font-semibold text-kk-indigo hover:underline inline-flex items-center gap-1"
                  >
                    <span>View project notes</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
