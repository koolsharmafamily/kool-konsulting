import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { servicePricing } from "@/data/pricing";
import { projects } from "@/data/work";
import { Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProcessSection from "@/components/home/ProcessSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Check, X, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];
  if (!service) return {};
  return {
    title: `${service.metaTitle}`,
    description: service.metaDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug];
  const pricing = servicePricing[params.slug];

  if (!service) {
    notFound();
  }

  const related = projects.filter((p) =>
    p.services.includes(params.slug as any)
  );

  const waServiceUrl = getWhatsAppUrl(service.whatsappMessage);

  return (
    <div className="bg-paper min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 bg-surface border-b border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
                {service.name}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight leading-[1.08] font-stretch-h1">
                {service.h1}
              </h1>

              <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed">
                {service.lead}
              </p>

              <div className="p-4 rounded-card bg-paper border border-line flex flex-wrap items-center justify-between gap-4 text-sm">
                <div>
                  <span className="text-xs text-ink-3 block">Starting from</span>
                  <span className="text-xl font-bold font-display text-ink tabular-nums">
                    {pricing?.startingPriceDisplay}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-ink-3 block">Typical delivery</span>
                  <span className="text-sm font-semibold text-ink">
                    {pricing?.timeline}
                  </span>
                </div>
                <Button
                  variant="whatsapp"
                  href={waServiceUrl}
                  className="text-xs px-4 py-2.5"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Inquire on WhatsApp
                </Button>
              </div>

              {params.slug === "websites" && (
                <p className="text-xs text-ink-3 italic">
                  Fact: Only 26.9% of Indian MSMEs have a business website. (India SME Forum, Dec 2025)
                </p>
              )}
            </div>

            {/* Visual Deliverable Callout */}
            <div className="lg:col-span-5">
              <div className="p-6 md:p-8 bg-paper border border-line rounded-stage shadow-sm space-y-4">
                <span className="text-xs font-semibold text-carbon uppercase tracking-wider block">
                  Example builds in this category:
                </span>
                <div className="space-y-2">
                  {service.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="p-3 bg-surface rounded-card border border-line text-sm font-medium text-ink flex items-center justify-between"
                    >
                      <span>{ex}</span>
                      <CheckCircle2 className="w-4 h-4 text-leaf flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What We Build */}
      <Section variant="paper">
        <SectionHeading
          h2="What we actually build & deliver"
          lead="Every line item is tested, documented, and handed over in your name."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.deliverables.map((del, idx) => (
            <div
              key={idx}
              className="p-5 bg-surface rounded-card border border-line flex items-start gap-3.5 shadow-sm"
            >
              <Check className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-ink leading-relaxed">
                {del}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Included vs Not Included */}
      <Section variant="surface">
        <SectionHeading
          h2="Clear expectations from day one"
          lead="What is included in every build, and what we do not do."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Included */}
          <div className="p-6 md:p-8 bg-paper rounded-stage border border-line space-y-4">
            <span className="text-xs font-bold text-leaf uppercase tracking-wider block">
              ✓ What's Always Included
            </span>
            <ul className="space-y-3 text-sm text-ink-2">
              {service.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="p-6 md:p-8 bg-paper rounded-stage border border-line space-y-4">
            <span className="text-xs font-bold text-ledger-red uppercase tracking-wider block">
              ✕ What We Don't Do
            </span>
            <ul className="space-y-3 text-sm text-ink-2">
              {service.notIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-ledger-red flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. Related Projects */}
      {related.length > 0 && (
        <Section variant="paper">
          <SectionHeading
            h2="Relevant work & deployments"
            lead="Real projects delivered in this domain."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.slice(0, 2).map((proj) => (
              <Link
                key={proj.slug}
                href={`/work/${proj.slug}`}
                className="p-6 bg-surface border border-line rounded-card hover:border-line-strong transition-all group"
              >
                <div className="flex justify-between items-center text-xs text-ink-3 mb-2">
                  <span className="font-semibold text-carbon uppercase">
                    {proj.industry}
                  </span>
                  <span>{proj.status}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-ink group-hover:text-carbon transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-ink-2 line-clamp-2 mb-4">
                  {proj.problem}
                </p>
                <span className="text-xs font-semibold text-carbon inline-flex items-center gap-1">
                  Read project story →
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* 5. Process Section */}
      <ProcessSection />

      {/* 6. Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <Section variant="paper">
          <SectionHeading
            h2={`Questions about ${service.name.toLowerCase()}`}
            lead="Practical details on timeline, revisions, and ownership."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((f, i) => (
              <div
                key={i}
                className="p-5 md:p-6 bg-surface border border-line rounded-card space-y-2"
              >
                <h3 className="font-bold text-ink text-base md:text-lg font-display">
                  {f.q}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* 7. Final CTA */}
      <FinalCtaSection />

    </div>
  );
}
