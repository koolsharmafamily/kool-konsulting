import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import HeroDemo from "@/components/home/HeroDemo";
import IntegrationTicker from "@/components/home/IntegrationTicker";
import ProcessSteps from "@/components/home/ProcessSteps";
import BentoPreview from "@/components/home/BentoPreview";
import RoiCalculator from "@/components/home/RoiCalculator";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/30 border border-amber-500/20 text-xs font-mono text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Nagpur & Central India
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                We automate the busywork. <br className="hidden md:block"/>
                <span className="text-amber-500">You grow the business.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Practical AI, workflow automation, and local marketing systems that turn 40 hours of manual administration into 4 seconds. Built for manufacturers, traders, and ambitious businesses.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-heading font-bold text-obsidian bg-amber-500 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2"
                >
                  <span>Book Free Opportunity Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20see%20how%20Kool%20Konsulting%20can%20help%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-surface hover:bg-surface-hover border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Fixed-price sprints
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> You own all code
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Local execution
                </span>
              </div>
            </div>

            {/* Right Column: Visual Runbook */}
            <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:mx-0">
              <HeroDemo />
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTEGRATION TICKER */}
      <IntegrationTicker />

      {/* 3. HOW WE WORK PROCESS */}
      <ProcessSteps />

      {/* 4. FOUR CORE PILLARS BENTO PREVIEW */}
      <BentoPreview />

      {/* 5. ROI / SAVINGS CALCULATOR */}
      <RoiCalculator />

      {/* 6. ABOUT THE ARCHITECT PREVIEW */}
      <section className="py-24 bg-obsidian border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl surface-card p-8 sm:p-12 relative overflow-hidden">
              {/* Subtle background element */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative w-48 h-60 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <img
                      src="/kulvir-sharma.webp"
                      alt="Kulvir Sharma - Tech Architect"
                      className="object-cover object-top w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/30 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
                    Founder-Led Practice
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                    Meet Kulvir Sharma, Founder & Tech Architect
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    University of Melbourne Finance graduate turned Tech Architect. With a background in corporate advisory and software engineering, Kulvir brings Tier-1 analytical discipline to businesses in Nagpur and Central India.
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-amber-500/50 pl-4">
                    &ldquo;You don&apos;t deal with an account manager or a junior sales rep; you deal directly with the architect who designs, tests, and ships your system.&rdquo;
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/about"
                      className="text-sm font-heading font-bold text-amber-400 hover:text-amber-300 flex items-center gap-2 group"
                    >
                      <span>Read Full Background & Credentials</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-24 text-center max-w-4xl mx-auto px-4 space-y-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-amber-500/5 blur-[100px] pointer-events-none rounded-full z-0" />
        
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Ready to reclaim your time?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Book a 30-minute diagnostic call. We’ll review your biggest operational hurdle and show you a working architecture plan within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg text-sm font-heading font-bold text-obsidian bg-amber-500 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              Book Free Diagnostic
            </Link>
            <a
              href="https://wa.me/918888821351"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-lg text-sm font-semibold text-slate-200 bg-surface hover:bg-surface-hover border border-white/10 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
