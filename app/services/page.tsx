import React from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { servicePricing } from "@/data/pricing";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services | Kool Konsulting",
  description:
    "Websites, apps, custom business software, and AI automations. Built specifically for growing Indian businesses.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Kool Konsulting",
    description:
      "Websites, apps, custom business software, and AI automations. Built specifically for growing Indian businesses.",
    url: `${site.origin}/services`,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Kool Konsulting",
    description:
      "Websites, apps, custom business software, and AI automations. Built specifically for growing Indian businesses.",
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  const serviceList = Object.values(servicesData);
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="bg-bg min-h-screen">
      <JsonLd data={breadcrumbs} />
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-surface border-b border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-semibold text-kk-indigo bg-kk-indigo-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight mt-4 mb-4 leading-tight font-stretch-h1">
            Software built around how you actually work.
          </h1>
          <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed">
            We don't sell bloated templates or monthly software rent. We design, build, and support four core systems that remove manual bottlenecks.
          </p>
        </div>
      </section>

      {/* Services List */}
      <Section variant="bg">
        <div className="space-y-12">
          {serviceList.map((svc) => {
            const pricing = servicePricing[svc.slug];

            return (
              <div
                key={svc.slug}
                id={svc.slug}
                className="p-8 md:p-12 rounded-stage bg-surface border border-line shadow-sm space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-ink font-stretch-h2">
                      {svc.name}
                    </h2>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-xs text-ink-3 block">Starting from</span>
                    <span className="text-2xl font-bold font-display text-ink tabular-nums">
                      {pricing?.startingPriceDisplay}
                    </span>
                    <span className="text-xs text-ink-3 block">
                      Usually {pricing?.timeline}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-xl font-bold text-ink font-display">
                      {svc.h1}
                    </h3>
                    <p className="text-base text-ink-2 leading-relaxed">
                      {svc.lead}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-semibold text-ink-3 block mb-2">
                        What we deliver:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-2">
                        {svc.deliverables.slice(0, 6).map((del, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-bg p-6 rounded-card border border-line space-y-4">
                    <span className="text-xs font-semibold text-ink-3 block">
                      Best suited for:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.industries.map((ind, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-surface border border-line text-xs font-medium text-ink-2"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-line flex items-center justify-between">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="text-sm font-semibold text-kk-indigo hover:underline inline-flex items-center gap-1"
                      >
                        View complete service breakdown
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
