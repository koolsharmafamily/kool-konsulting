import React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Terms of Engagement | Kool Konsulting",
  description: "Straightforward terms regarding proposals, quotes, milestone payments, and code ownership.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Engagement | Kool Konsulting",
    description: "Straightforward terms regarding proposals, quotes, milestone payments, and code ownership.",
    url: `${site.origin}/terms`,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Engagement | Kool Konsulting",
    description: "Straightforward terms regarding proposals, quotes, milestone payments, and code ownership.",
    images: ["/opengraph-image"],
  },
};

export default function TermsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms", url: "/terms" },
  ]);

  return (
    <div className="bg-bg min-h-screen py-16 md:py-24">
      <JsonLd data={breadcrumbs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="border-b border-line pb-6 space-y-2">
          <span className="text-xs font-semibold text-kk-indigo bg-kk-indigo-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Terms
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-ink tracking-tight font-stretch-h1">
            Terms of Engagement
          </h1>
          <p className="text-sm text-ink-3">
            Last updated: October 2026.
          </p>
        </div>

        <div className="space-y-6 text-sm md:text-base text-ink-2 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              1. Fixed Quotes & Scope
            </h2>
            <p>
              Estimates provided via our website calculator or initial phone discussions are informational ballparks. Work commences only upon mutual signing of a formal Written Project Scope detailing deliverables, milestone payments, and timelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              2. Milestones & Payments
            </h2>
            <p>
              For projects under ₹2,00,000, standard terms are 50% advance to commence architecture and design, and 50% upon final staging approval prior to production deployment. Larger enterprise software projects operate on agreed multi-stage milestone releases. All fees exclude statutory GST.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              3. 100% Intellectual Property Handover
            </h2>
            <p>
              Upon receipt of final project payment, full ownership of custom application source code, databases, design assets, and administrative accounts transfers entirely to you. Kool Konsulting does not hold hostage client domains, hosting accounts, or proprietary code.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-ink font-display">
              4. Post-Launch Warranty
            </h2>
            <p>
              We provide a {site.freeFixWindowDays}-day defect warranty following system rollout. Any technical errors or bugs deviating from agreed scope are corrected free of charge during this window.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-line">
          <Link href="/" className="text-xs font-semibold text-kk-indigo hover:underline">
            Return to homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
