import React from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { servicesData } from "@/data/services";
import { servicePricing } from "@/data/pricing";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesIndex() {
  const serviceList = Object.values(servicesData);

  return (
    <Section variant="bg">
      <SectionHeading
        h2="What we build"
        lead="Most businesses start with one thing and add the rest later."
      />

      {/* List Style Rows */}
      <div className="border border-line rounded-stage bg-surface divide-y divide-line overflow-hidden shadow-sm">
        {serviceList.map((svc) => {
          const pricing = servicePricing[svc.slug];

          return (
            <div
              key={svc.slug}
              className="p-6 md:p-10 transition-colors hover:bg-bg/40 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Col 1: Service Info & Chips */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ink font-stretch-h3">
                    {svc.name}
                  </h3>

                  <p className="text-base md:text-lg text-ink-2 font-normal leading-relaxed">
                    {svc.lead}
                  </p>

                  {/* Chips of example builds */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {svc.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-bg border border-line text-ink-2"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>

                  {/* Starting from & timeline metadata */}
                  <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-ink-3">
                    <span>
                      Starting from{" "}
                      <strong className="text-ink font-bold text-sm tabular-nums">
                        {pricing?.startingPriceDisplay}
                      </strong>
                    </span>
                    <span>•</span>
                    <span>
                      Usually{" "}
                      <strong className="text-ink font-semibold">
                        {pricing?.timeline}
                      </strong>
                    </span>
                  </div>
                </div>

                {/* Col 2: Action & Mini Visual preview */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
                  <div className="w-full max-w-[260px] p-3 rounded-card bg-bg border border-line text-xs">
                    <p className="text-ink-2 line-clamp-2 text-xs">
                      {svc.deliverables[0]}
                    </p>
                  </div>

                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-kk-indigo transition-colors mt-2"
                  >
                    <span>See {svc.name.toLowerCase()} details</span>
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing Footnote */}
      <div className="mt-6 text-center text-xs text-ink-3 max-w-xl mx-auto">
        Prices exclude GST. Usage costs, such as WhatsApp messages or AI, are billed to you by the provider with no markup from us.
      </div>
    </Section>
  );
}
