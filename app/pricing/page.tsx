import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import BallparkEstimator from "@/components/home/BallparkEstimator";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { servicePricing, carePlans } from "@/data/pricing";
import { site } from "@/data/site";
import { Check, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pricing & Care Plans | Kool Konsulting",
  description:
    "Transparent starting prices and care plans for Indian businesses. Fixed written quotes, milestone payments, zero software lock-in.",
};

export default function PricingPage() {
  const services = Object.values(servicePricing);

  return (
    <div className="bg-paper min-h-screen">
      
      {/* 1. Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-surface border-b border-line">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink tracking-tight mt-4 mb-4 font-stretch-h1">
            Predictable pricing. Fixed quotes. Zero lock-in.
          </h1>
          <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed">
            Every project starts with a clear written plan. You know the exact deliverables, timeline, and cost before we begin.
          </p>
        </div>
      </section>

      {/* 2. Core Services Price Table */}
      <Section id="engagement-models" variant="paper">
        <SectionHeading
          h2="Starting prices by service"
          lead="Every quote is fixed for the agreed scope. No open-ended hourly billing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-surface rounded-stage border border-line p-8 flex flex-col justify-between shadow-sm space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-line pb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-ink font-stretch-h3">
                      {svc.name}
                    </h3>
                    <span className="text-xs text-ink-3">
                      Typical delivery: {svc.timeline}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-ink-3 block">Starting from</span>
                    <span className="text-2xl font-bold font-display text-ink tabular-nums">
                      {svc.startingPriceDisplay}
                    </span>
                    {svc.unit && (
                      <span className="text-[11px] text-ink-3 block">
                        {svc.unit}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-ink uppercase tracking-wider block">
                    What is included in this tier:
                  </span>
                  <ul className="space-y-2 text-xs md:text-sm text-ink-2">
                    {svc.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-line">
                <Button
                  variant="secondary"
                  href={`/contact?service=${encodeURIComponent(svc.name)}`}
                  className="w-full text-sm"
                >
                  Get a written quote for {svc.name.toLowerCase()}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Care Plans */}
      <Section variant="surface">
        <SectionHeading
          h2="Monthly care plans"
          lead="Optional ongoing maintenance, backups, and adjustments once your system is live."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {carePlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-paper rounded-stage border border-line p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="border-b border-line pb-4">
                  <h3 className="font-display font-bold text-xl text-ink">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold text-ink tabular-nums">
                      {plan.priceDisplay}
                    </span>
                    <span className="text-xs text-ink-3">{plan.cadence}</span>
                  </div>
                  <p className="text-xs text-ink-2 mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-ink-2">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-line">
                <span className="text-[11px] text-ink-3 block text-center">
                  Billed monthly. Cancel anytime with 30 days notice.
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Payment Terms & Guarantee */}
      <Section variant="paper">
        <div className="max-w-3xl mx-auto p-8 bg-surface rounded-stage border border-line space-y-6">
          <div className="flex items-center gap-3 text-carbon">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="font-display font-bold text-2xl text-ink">
              How payments and ownership work
            </h2>
          </div>

          <div className="space-y-3 text-sm text-ink-2 leading-relaxed">
            <p>
              <strong className="text-ink font-semibold">Payment terms:</strong>{" "}
              {site.payments}
            </p>
            <p>
              <strong className="text-ink font-semibold">Free fix window:</strong>{" "}
              Any bugs or defects in what we built are resolved free for{" "}
              {site.freeFixWindowDays} days after launch.
            </p>
            <p className="p-4 bg-paper rounded-card border border-line text-xs font-medium text-ink">
              Never included: licence fees paid to us, lock-in, or charges you didn't approve in writing. All prices exclude GST.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. Ballpark Estimator */}
      <BallparkEstimator />

      {/* 6. Final CTA */}
      <FinalCtaSection />

    </div>
  );
}
