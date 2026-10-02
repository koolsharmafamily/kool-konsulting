"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { servicePricing, estimatorExtras } from "@/data/pricing";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowRight, Check } from "lucide-react";

type ServiceKey = "websites" | "apps" | "software" | "automation";
type SizeKey = "simple" | "standard" | "advanced";

export default function BallparkEstimator() {
  const [service, setService] = useState<ServiceKey>("websites");
  const [size, setSize] = useState<SizeKey>("standard");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentPricing = servicePricing[service];
  const sizeOption = currentPricing.estimator[size];

  // Calculate pricing range
  let min = sizeOption.min;
  let max = sizeOption.max;

  // Add extras
  estimatorExtras.forEach((extra) => {
    if (selectedExtras.includes(extra.id)) {
      if (extra.factor > 0) {
        min = Math.round(min * (1 + extra.factor));
        max = Math.round(max * (1 + extra.factor));
      } else {
        min += extra.fixedMin;
        max += extra.fixedMax;
      }
    }
  });

  const formattedMin = `₹${min.toLocaleString("en-IN")}`;
  const formattedMax = `₹${max.toLocaleString("en-IN")}`;

  const prefilledText = `Hi Kulvir, I used your website estimator. I need: ${currentPricing.name} (${size} size). Extras: ${
    selectedExtras.length > 0 ? selectedExtras.join(", ") : "None"
  }. Estimated ballpark: ${formattedMin} – ${formattedMax}. Can we discuss a formal quote?`;

  const waEstimateUrl = getWhatsAppUrl(prefilledText);
  const quoteFormUrl = `/contact?service=${encodeURIComponent(currentPricing.name)}&size=${size}`;

  return (
    <Section id="estimate" variant="paper">
      <SectionHeading
        h2="Get a ballpark in a minute"
        lead="Select what your business needs to see typical investment ranges and timelines. No email required."
      />

      <div className="max-w-4xl mx-auto bg-surface border border-line rounded-stage p-6 md:p-10 shadow-sm space-y-8">
        
        {/* Step 1: Service Type */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-ink uppercase tracking-wider block">
            Step 1: What do you need built?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {(Object.keys(servicePricing) as ServiceKey[]).map((key) => {
              const svc = servicePricing[key];
              const isSelected = service === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setService(key)}
                  className={`p-3.5 rounded-btn text-left border transition-all ${
                    isSelected
                      ? "bg-carbon text-paper border-carbon shadow-sm"
                      : "bg-paper text-ink border-line hover:border-line-strong hover:bg-surface"
                  }`}
                >
                  <span className="font-semibold text-sm block leading-tight">
                    {svc.name}
                  </span>
                  <span className={`text-[11px] block mt-1 ${isSelected ? "text-paper/80" : "text-ink-3"}`}>
                    From {svc.startingPriceDisplay}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Size & Scope */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-ink uppercase tracking-wider block">
            Step 2: Choose project scope
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(["simple", "standard", "advanced"] as SizeKey[]).map((s) => {
              const opt = currentPricing.estimator[s];
              const isSelected = size === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`p-4 rounded-btn text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-carbon-050 border-carbon text-ink"
                      : "bg-paper text-ink border-line hover:border-line-strong"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-bold text-sm capitalize block text-ink">
                      {s}
                    </span>
                    <p className="text-xs text-ink-2 leading-relaxed">
                      {opt.example}
                    </p>
                  </div>
                  <span className="mt-3 font-semibold text-xs text-carbon tabular-nums">
                    {opt.range}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Add-on Extras */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-ink uppercase tracking-wider block">
            Step 3: Any specific connections? (Optional)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {estimatorExtras.map((extra) => {
              const isChecked = selectedExtras.includes(extra.id);
              return (
                <button
                  key={extra.id}
                  type="button"
                  onClick={() => toggleExtra(extra.id)}
                  className={`p-3 rounded-btn border text-left flex items-center justify-between transition-all ${
                    isChecked
                      ? "bg-carbon-050 border-carbon text-ink"
                      : "bg-paper border-line text-ink-2 hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked
                          ? "bg-carbon border-carbon text-paper"
                          : "border-line-strong bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3" />}
                    </span>
                    <span className="text-xs font-medium text-ink">{extra.label}</span>
                  </div>
                  <span className="text-[11px] text-ink-3 tabular-nums font-semibold">
                    {extra.priceDisplay}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Estimated Result Box */}
        <div className="p-6 md:p-8 bg-paper border border-line rounded-stage flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-3">
              Ballpark Estimate
            </span>
            <div className="text-2xl sm:text-4xl font-display font-bold text-ink tabular-nums">
              {formattedMin} – {formattedMax}
            </div>
            <p className="text-xs text-ink-3">
              Usually {currentPricing.timeline}. Final price after free check-up. GST extra.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <Button
              variant="whatsapp"
              href={waEstimateUrl}
              className="text-sm px-5 py-3"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Send to Kulvir on WhatsApp
            </Button>
            <Button
              variant="secondary"
              href={quoteFormUrl}
              className="text-sm px-5 py-3"
            >
              Get a written quote
            </Button>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/pricing"
            className="text-xs font-semibold text-carbon hover:underline inline-flex items-center gap-1"
          >
            <span>See complete starting prices and monthly care plans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </Section>
  );
}
