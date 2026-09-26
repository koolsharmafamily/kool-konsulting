"use client";

import React from "react";
import Link from "next/link";
import { Zap, TrendingUp, FileSpreadsheet, Code2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const PILLARS = [
  {
    id: "automation",
    icon: Zap,
    title: "AI & Workflow Automation",
    price: "From ₹60,000 one-off",
    desc: "Stop paying staff to manually retype orders. We build bots that extract bills, record attendance, and chase payments automatically.",
    metric: "30-45 hours saved per week",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Local SEO & Google Ranking",
    price: "From ₹18,000 / month",
    desc: "Rank your Google Maps profile in the top 3, collect 5-star reviews automatically, and run search ads that generate real phone calls.",
    metric: "Steady stream of local buyer calls",
  },
  {
    id: "strategy",
    icon: FileSpreadsheet,
    title: "Business Plans & Financial Models",
    price: "From ₹45,000 one-off",
    desc: "Rigorous financial models, monthly cash-flow forecasts, and professional CMA project reports prepared for Indian bank managers.",
    metric: "Approved by lenders & investors",
  },
  {
    id: "software",
    icon: Code2,
    title: "Custom Software & Web Portals",
    price: "From ₹75,000 fixed",
    desc: "Replace messy spreadsheets with multi-godown stock trackers and custom dashboards. You own 100% of the code—no monthly rent.",
    metric: "100% intellectual property ownership",
  },
];

export default function BentoPreview() {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              Four Core Capabilities
            </h2>
            <p className="text-slate-400 text-lg">
              Specialized systems built for manufacturers, distributors, and ambitious local businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.id} delay={idx * 0.1}>
                <div className="surface-card rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Icon className="w-32 h-32 text-amber-500" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="p-3 rounded-lg bg-surface border border-white/10 group-hover:border-amber-500/30 transition-colors text-amber-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-obsidian px-3 py-1 rounded-md border border-white/5">
                      {pillar.price}
                    </span>
                  </div>

                  <div className="flex-grow space-y-3 relative z-10">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono relative z-10">
                    <span className="text-emerald-400">{pillar.metric}</span>
                    <Link
                      href={`/services#${pillar.id}`}
                      className="text-white hover:text-amber-400 flex items-center gap-1.5 font-sans font-semibold transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
