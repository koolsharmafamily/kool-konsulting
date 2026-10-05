"use client";

import React from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const topFaqs = faqs.slice(0, 6);

  return (
    <Section id="faq" variant="surface">
      <SectionHeading
        h2="Frequently asked questions"
        lead="Straight answers to the questions Indian business owners ask before starting."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {topFaqs.map((faq) => (
          <details
            key={faq.id}
            className="group bg-bg border border-line rounded-card p-5 md:p-6 transition-colors hover:border-line-strong open:bg-surface open:shadow-sm"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none text-base md:text-lg font-bold text-ink select-none font-display font-stretch-h3">
              <span>{faq.q}</span>
              <ChevronDown className="w-5 h-5 text-ink-3 transition-transform duration-200 group-open:rotate-180 group-open:text-kk-indigo flex-shrink-0 ml-4" />
            </summary>
            <div className="mt-3 pt-3 border-t border-line text-sm md:text-base text-ink-2 leading-relaxed">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="text-center pt-8">
        <Link
          href="/faq"
          className="text-sm font-semibold text-kk-indigo hover:text-kk-indigo-600 underline underline-offset-4"
        >
          View all 10 common questions and answers
        </Link>
      </div>
    </Section>
  );
}
