import React from "react";
import Link from "next/link";
import HeroDemo from "@/components/home/HeroDemo";
import IntegrationTicker from "@/components/home/IntegrationTicker";
import ProcessSteps from "@/components/home/ProcessSteps";
import BentoPreview from "@/components/home/BentoPreview";
import RoiCalculator from "@/components/home/RoiCalculator";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-black">
      {/* 1. HERO SECTION (Brutalist Split) */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-8">
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5">
                Central India Operations Base
              </div>

              <h1 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-[1.05]">
                We automate the busywork.<br/>
                <span className="text-neutral-500">You grow the business.</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
                We engineer practical automation and revenue systems that turn 40 hours of manual administration into 4 seconds. Zero fluff. Pure operational efficiency.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto brutalist-button px-8 py-4 text-sm flex items-center justify-center gap-2"
                >
                  <span>Initialize Audit</span>
                </Link>

                <a
                  href="https://wa.me/918888821351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto brutalist-button-outline px-8 py-4 text-sm flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Line</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-terminal-green"></div> Fixed-Price
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-terminal-green"></div> 100% IP Ownership
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-terminal-green"></div> Local Execution
                </span>
              </div>
            </div>

            {/* Right Column: Terminal Visual */}
            <div className="lg:col-span-5 w-full">
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

      {/* 6. FOUNDER / ARCHITECT SECTION */}
      <section className="py-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="border border-white/15 bg-[#050505] p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4">
                  <div className="border border-white/15 aspect-[3/4] bg-neutral-900 w-full max-w-sm">
                    <img
                      src="/kulvir-sharma.webp"
                      alt="Kulvir Sharma - Tech Architect"
                      className="object-cover w-full h-full grayscale"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-8">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    Chief Architect
                  </div>

                  <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tighter">
                    Kulvir Sharma
                  </h3>

                  <div className="text-lg text-neutral-400 leading-relaxed space-y-4 max-w-2xl">
                    <p>
                      University of Melbourne Finance graduate turned Tech Architect. Bringing Tier-1 analytical discipline directly to businesses in Nagpur and Central India.
                    </p>
                    <p className="border-l-2 border-white/20 pl-4 text-white">
                      "You don't deal with an account manager or a junior sales rep; you deal directly with the architect who designs, tests, and ships your system."
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/about"
                      className="brutalist-button-outline px-6 py-3 inline-block text-xs"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4 space-y-10">
        <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tighter leading-tight">
          Ready to reclaim<br/>your operational time?
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-mono">
          Book a 30-minute diagnostic. We’ll review your biggest hurdle and draft a working architecture plan within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto brutalist-button px-10 py-4 text-sm"
          >
            Deploy Systems
          </Link>
          <a
            href="https://wa.me/918888821351"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto brutalist-button-outline px-10 py-4 text-sm"
          >
            Direct Chat
          </a>
        </div>
      </section>
    </div>
  );
}
