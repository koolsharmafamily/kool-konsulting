"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowUpRight } from "lucide-react";

// Dynamic import with SSR disabled for three.js canvas
const BahiKhataScene = dynamic(
  () => import("@/components/three/BahiKhataScene"),
  { ssr: false }
);

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canLoad3D, setCanLoad3D] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion & performance fallbacks
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSaveData = (navigator as any).connection?.saveData;

    if (!prefersReducedMotion && !isSaveData) {
      // Load 3D scene after browser reaches idle state
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => setCanLoad3D(true), { timeout: 2000 });
      } else {
        setTimeout(() => setCanLoad3D(true), 800);
      }
    }

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height;
      const topOffset = -rect.top;
      const progress = Math.max(0, Math.min(1, topOffset / (heroHeight * 0.75)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waHeroUrl = getWhatsAppUrl(
    "Hi Kulvir, I saw your homepage. I'd like to talk about tech for my business."
  );

  return (
    <section
      ref={heroRef}
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-paper"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-display font-bold text-ink tracking-tight leading-[1.04] font-stretch-h1">
              We build the tech that runs growing Indian businesses.
            </h1>

            <p className="text-lg md:text-xl text-ink-2 font-normal leading-relaxed max-w-2xl">
              Websites, apps, business software and AI automations, built around how your team already works. You deal directly with the person who builds them.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button variant="primary" href="/contact">
                Get a free tech check-up
              </Button>
              <Button
                variant="secondary"
                href={waHeroUrl}
                icon={<MessageSquare className="w-5 h-5 text-whatsapp" />}
              >
                Chat on WhatsApp
              </Button>
            </div>

            <div className="pt-3 border-t border-line">
              <p className="text-xs md:text-sm text-ink-3">
                Built for a cinema, a construction site, a mandi wholesale shop, a dance academy in Lucknow and a jewellery designer in London.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Stage */}
          <div className="lg:col-span-5 w-full">
            <div className="relative aspect-[4/4.2] sm:aspect-square w-full max-w-[460px] mx-auto rounded-stage bg-surface border border-line shadow-floating p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Top pill */}
              <div className="flex items-center justify-between z-10 pointer-events-none">
                <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
                  From registers to real-time
                </span>
                <span className="text-[11px] text-ink-3 font-medium">
                  {canLoad3D ? "Drag to Rotate 3D" : "Interactive Stage"}
                </span>
              </div>

              {/* 3D Canvas / Poster Stand-in */}
              <div className="my-auto relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
                {canLoad3D ? (
                  <BahiKhataScene scrollProgress={scrollProgress} />
                ) : (
                  <div className="relative w-44 sm:w-52 h-64 sm:h-72 bg-bahi rounded-lg shadow-xl border-t-2 border-r-2 border-[#D94C43] p-4 flex flex-col justify-between text-paper transform -rotate-3 transition-transform duration-300">
                    <div className="absolute top-28 -left-2 -right-2 h-3.5 bg-[#EBE1C9] shadow-sm rounded-full transform rotate-1 flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#DFD2B4] shadow-inner" />
                    </div>
                    <div className="border border-dashed border-paper/40 h-full w-full rounded p-3 flex flex-col justify-between">
                      <div className="flex justify-between items-start text-[10px] text-paper/70 font-sans tracking-widest uppercase">
                        <span>Bahi Khata</span>
                        <span>Nagpur</span>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="w-8 h-8 mx-auto rounded bg-paper/10 border border-paper/30 flex items-center justify-center">
                          <span className="font-display font-bold text-sm">KK</span>
                        </div>
                        <span className="text-xs font-display tracking-tight text-paper/90 block">
                          Kool Konsulting
                        </span>
                      </div>
                      <div className="text-center text-[10px] text-paper/60 font-sans">
                        Cloth Bound Accounts
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Four service direct links at base */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line text-xs font-semibold z-10">
                <Link
                  href="/services/websites"
                  className="p-2 rounded-lg bg-paper hover:bg-carbon-050 hover:text-carbon transition-colors flex items-center justify-between"
                >
                  <span>1. Websites</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <Link
                  href="/services/apps"
                  className="p-2 rounded-lg bg-paper hover:bg-carbon-050 hover:text-carbon transition-colors flex items-center justify-between"
                >
                  <span>2. Apps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <Link
                  href="/services/software"
                  className="p-2 rounded-lg bg-paper hover:bg-carbon-050 hover:text-carbon transition-colors flex items-center justify-between"
                >
                  <span>3. Software</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <Link
                  href="/services/automation"
                  className="p-2 rounded-lg bg-paper hover:bg-carbon-050 hover:text-carbon transition-colors flex items-center justify-between"
                >
                  <span>4. Automation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
