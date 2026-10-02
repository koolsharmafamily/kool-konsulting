import React from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Kool Konsulting",
  description:
    "Everything you need to know about pricing, delivery timelines, Tally integration, code ownership, and post-launch support.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-surface border-b border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Help & Knowledge
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight mt-4 mb-4 font-stretch-h1">
            Frequently asked questions.
          </h1>
          <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed">
            Honest answers about costs, timelines, technical integrations, and intellectual property ownership.
          </p>
        </div>
      </section>

      <Section variant="paper">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-surface border border-line rounded-card p-6 md:p-8 transition-colors hover:border-line-strong open:shadow-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg md:text-xl font-bold text-ink select-none font-display font-stretch-h3">
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-ink-3 transition-transform duration-200 group-open:rotate-180 group-open:text-carbon flex-shrink-0 ml-4" />
              </summary>
              <div className="mt-4 pt-4 border-t border-line text-sm md:text-base text-ink-2 leading-relaxed">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <FinalCtaSection />
    </div>
  );
}
