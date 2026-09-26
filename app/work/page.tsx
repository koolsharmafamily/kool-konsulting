import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import fs from 'fs';
import path from 'path';

// Load case studies from the portfolio json
export default function WorkPage() {
  const caseStudies = [
    {
      "id": "adlens",
      "title": "AdLens AI",
      "subtitle": "Turning unstructured ad videos into structured, evidence-based marketing intelligence",
      "industry": "Marketing technology"
    },
    {
      "id": "dsp",
      "title": "Distributor workflow research and automation",
      "subtitle": "Finding where a distribution network actually loses time, then removing it",
      "industry": "Asset management"
    },
    {
      "id": "agencyAdOps",
      "title": "Agency ad-operations automation",
      "subtitle": "Centralised reporting and alerting across many client ad accounts",
      "industry": "Digital marketing agency"
    },
    {
      "id": "constructionWorkforce",
      "title": "Construction workforce automation",
      "subtitle": "From site attendance to wages to invoicing, as one process instead of three",
      "industry": "Construction"
    },
    {
      "id": "financeAutomation",
      "title": "Finance data and Excel automation",
      "subtitle": "Removing the manual assembly between operations data and the finance view",
      "industry": "Financial services"
    },
    {
      "id": "aiConstructionSite",
      "title": "AI-powered construction site",
      "subtitle": "Computer vision for safety and operations: what it could do, and what it would cost",
      "industry": "Construction"
    },
    {
      "id": "trakit",
      "title": "TrakIT: Australian market entry",
      "subtitle": "Taking a B2B logistics SaaS platform into a new market, and rebuilding the site around its buyer",
      "industry": "B2B SaaS, logistics"
    },
    {
      "id": "tradingAgent",
      "title": "AI options-trading agent",
      "subtitle": "An agentic workflow and API integration exercise, built to learn",
      "industry": "Personal learning build"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5 inline-block">
              Case Studies & Deployments
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-tight">
              Systems built <br/>to run themselves.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-mono">
              A selection of engineering, automation, and operational architecture projects previously shipped by Kulvir Sharma.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudies.map((caseStudy, idx) => (
              <ScrollReveal key={caseStudy.id} delay={idx * 0.1}>
                <div className="group relative border border-white/15 bg-[#050505] hover:border-white/40 transition-colors h-full flex flex-col justify-between">
                  
                  {/* Top: Metadata */}
                  <div className="p-6 md:p-8 border-b border-white/15 flex justify-between items-start">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      {caseStudy.industry}
                    </span>
                    <span className="text-[10px] font-mono text-terminal-green uppercase tracking-widest">
                      CASE {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Middle: Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight">
                      {caseStudy.title}
                    </h2>
                    <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                      {caseStudy.subtitle}
                    </p>
                  </div>

                  {/* Bottom: Action */}
                  <div className="p-6 md:p-8 border-t border-white/15">
                    <Link
                      href="https://kulvirsharma-portfolio.vercel.app/work"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white group-hover:text-terminal-green transition-colors"
                    >
                      <span>Read on Portfolio</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/15 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter mb-6">
          Ready to engineer your own system?
        </h2>
        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="brutalist-button px-8 py-4 text-sm"
          >
            Deploy Systems
          </Link>
        </div>
      </section>

    </div>
  );
}
