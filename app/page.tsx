import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Building2,
  TrendingUp,
  FileSpreadsheet,
  Code2,
} from "lucide-react";
import Marquee from "@/components/Marquee";
import HeroDemo from "@/components/home/HeroDemo";
import BentoPreview from "@/components/home/BentoPreview";
import RoiCalculator from "@/components/home/RoiCalculator";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Nagpur & Central India · AI, Marketing & Custom Software</span>
            </div>

            {/* Core Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              Stop running your Nagpur business on{" "}
              <span className="text-purple-400">
                WhatsApp and broken Excel sheets.
              </span>
            </h1>

            {/* Simple, grounded subhead */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed">
              We build AI automations, local marketing engines, and custom software that turn 40 hours of manual busywork into 4 seconds. Built specifically for manufacturers, traders, and growing businesses in Central India.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-heading font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/40 flex items-center justify-center gap-2"
              >
                <span>Book Free 30-Min Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20see%20how%20Kool%20Konsulting%20can%20help%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-emerald-400 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Directly</span>
              </a>
            </div>

            {/* Credibility Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-5 pt-1 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Fixed-price quotes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> You own all the code
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Ready in 10-14 days
              </span>
            </div>
          </div>

          {/* Interactive Demo Video Frame */}
          <div className="mt-12 max-w-5xl mx-auto">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE BANNER */}
      <Marquee text="WE BUILD IT. WE DEPLOY IT. YOU KEEP THE CODE. • NO CORPORATE JARGON. JUST WORKING SYSTEMS. • AUTOMATE MIDC. • AUTOMATE WARDHAMAN NAGAR. • " />

      {/* 3. FOUR CORE PILLARS BENTO PREVIEW */}
      <BentoPreview />

      {/* 4. ROI / SAVINGS CALCULATOR */}
      <RoiCalculator />

      {/* 5. ABOUT THE ARCHITECT PREVIEW (TRUST SECTION) */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border border-zinc-700 shadow-xl bg-black">
                  <Image
                    src="/kulvir-sharma.webp"
                    alt="Kulvir Sharma - Founder of Kool Konsulting in Nagpur"
                    fill
                    sizes="250px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
                  Founder-Led Practice
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Meet Kulvir Sharma, Founder & Tech Architect
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  University of Melbourne Finance graduate turned Tech Architect. With a background in M&A corporate advisory, valuation, and software engineering, Kulvir brings Tier-1 analytical discipline to businesses in Nagpur and Central India.
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  &ldquo;You don&apos;t deal with an account manager or a sales intern; you deal directly with the architect who designs and ships your system.&rdquo;
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group"
                  >
                    <span>Read Full Background & Credentials</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Ready to Automate or Grow Your Business?
        </h2>
        <p className="text-zinc-300 text-base max-w-2xl mx-auto">
          Book a 20-minute call with Kulvir Sharma. We’ll review your biggest operational hurdle and show you a working plan within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl text-sm font-heading font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/40"
          >
            Book Free Consultation
          </Link>
          <a
            href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20discuss%20an%20automation%20or%20marketing%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl text-sm font-semibold text-zinc-300 hover:text-emerald-400 bg-zinc-900 border border-zinc-800 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us (+91 88888 21351)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
