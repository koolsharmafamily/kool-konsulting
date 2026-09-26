import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroDemo from "@/components/home/HeroDemo";
import BentoPreview from "@/components/home/BentoPreview";
import RoiCalculator from "@/components/home/RoiCalculator";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-black">
      {/* 1. HERO SECTION (Brutalist Split with Old Content) */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-8">
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5 flex items-center gap-2">
                <span className="w-2 h-2 bg-white" />
                Nagpur & Central India · AI, Marketing & Custom Software
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tighter leading-[1.05]">
                Stop running your Nagpur business on{" "}
                <span className="text-neutral-500">
                  WhatsApp and broken Excel sheets.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
                We build AI automations, local marketing engines, and custom software that turn 40 hours of manual busywork into 4 seconds. Built specifically for manufacturers, traders, and growing businesses in Central India.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto brutalist-button px-8 py-4 text-sm flex items-center justify-center gap-2"
                >
                  <span>Book Free 30-Min Call</span>
                </Link>

                <a
                  href="https://wa.me/918888821351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto brutalist-button-outline px-8 py-4 text-sm flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Directly</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-terminal-green"></div> Fixed-price quotes
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-terminal-green"></div> You own all the code
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-terminal-green"></div> Ready in 10-14 days
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

      {/* 2. INFINITE MARQUEE BANNER (Brutalist style) */}
      <Marquee text="WE BUILD IT. WE DEPLOY IT. YOU KEEP THE CODE. • NO CORPORATE JARGON. JUST WORKING SYSTEMS. • AUTOMATE MIDC. • AUTOMATE WARDHAMAN NAGAR. • " />

      {/* 3. FOUR CORE PILLARS BENTO PREVIEW */}
      <BentoPreview />

      {/* 4. ROI / SAVINGS CALCULATOR */}
      <RoiCalculator />

      {/* 5. ABOUT THE ARCHITECT PREVIEW (TRUST SECTION) */}
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

                <div className="lg:col-span-8 space-y-6">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5 inline-block">
                    Founder-Led Practice
                  </div>

                  <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
                    Meet Kulvir Sharma, Founder & Tech Architect
                  </h3>

                  <div className="text-lg text-neutral-400 leading-relaxed space-y-4 max-w-2xl">
                    <p>
                      University of Melbourne Finance graduate turned Tech Architect. With a background in M&A corporate advisory, valuation, and software engineering, Kulvir brings Tier-1 analytical discipline to businesses in Nagpur and Central India.
                    </p>
                    <p className="border-l-2 border-white/20 pl-4 text-white">
                      "You don't deal with an account manager or a sales intern; you deal directly with the architect who designs and ships your system."
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/about"
                      className="brutalist-button-outline px-6 py-3 inline-block text-xs"
                    >
                      Read Full Background & Credentials
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4 space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tighter leading-tight">
          Ready to Automate or Grow Your Business?
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-mono">
          Book a 20-minute call with Kulvir Sharma. We’ll review your biggest operational hurdle and show you a working plan within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto brutalist-button px-10 py-4 text-sm"
          >
            Book Free Consultation
          </Link>
          <a
            href="https://wa.me/918888821351"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto brutalist-button-outline px-10 py-4 text-sm"
          >
            WhatsApp Us (+91 88888 21351)
          </a>
        </div>
      </section>
    </div>
  );
}
