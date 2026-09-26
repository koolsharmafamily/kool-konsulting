"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const PILLARS = [
  {
    id: "automation",
    title: "AI Automations & Tally Sync",
    price: "From ₹60,000 one-off",
    desc: "Stop paying staff to do mechanical data entry. We connect your daily tools—WhatsApp, Excel, and Tally Prime—so data flows instantly without human error.",
    bullets: [
      "Extract bills and invoices automatically from emails and WhatsApp.",
      "Instantly sync WhatsApp orders directly into Tally sales vouchers.",
      "Automatically chase pending payments without manual follow-ups."
    ]
  },
  {
    id: "marketing",
    title: "Local Dominance & Google 3-Pack",
    price: "From ₹18,000 / mo",
    desc: "When someone in Nagpur searches Google for what you sell, be the first business they see. We rank your profile in the top 3 and generate real calls.",
    bullets: [
      "Rank #1 in Google Maps for MIDC, Sitabuldi, Civil Lines, etc.",
      "Automated WhatsApp review generator after every successful sale.",
      "Monthly report showing verified incoming phone calls and leads."
    ]
  },
  {
    id: "strategy",
    title: "Bank-Ready Business Plans",
    price: "From ₹45,000 one-off",
    desc: "Planning to expand, buy new machinery in Butibori, or apply for a bank loan? Get a rigorous financial model and professional CMA project report.",
    bullets: [
      "3-scenario financial model (expected, conservative, downside).",
      "CMA data & project report formatted for Indian bank managers.",
      "Personal walkthrough so you can answer lender questions easily."
    ]
  },
  {
    id: "software",
    title: "Custom Software & Portals",
    price: "From ₹75,000 fixed",
    desc: "Replace cluttered spreadsheets with simple, fast software built for your business. You own 100% of the code—no recurring monthly software rent.",
    bullets: [
      "Multi-godown stock count & dispatch tracking on your mobile phone.",
      "Fast, conversion-focused business websites that bring inquiries.",
      "Full source code handover: you own it forever with zero seat fees."
    ]
  },
];

export default function BentoPreview() {
  return (
    <section className="py-24 bg-black border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
              [ Core Systems ]
            </h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
              Deployment Capabilities.
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/15">
          {PILLARS.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 0.1}>
              <div className={`p-8 h-full flex flex-col justify-between ${idx % 2 === 0 ? 'border-b md:border-r border-white/15' : 'border-b border-white/15'}`}>
                
                <div className="mb-8 space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <h4 className="text-xl font-sans font-bold text-white">
                      {pillar.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-500 bg-white/5 px-2 py-1 border border-white/10">
                      {pillar.price}
                    </span>
                  </div>

                  <p className="text-sm font-sans text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs font-mono text-neutral-300">
                        <Check className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-4 border-t border-white/15">
                  <Link
                    href={`/services#${pillar.id}`}
                    className="text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-400 transition-colors"
                  >
                    Examine Architecture &rarr;
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
