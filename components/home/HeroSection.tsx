"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { ArrowUpRight, RotateCcw } from "lucide-react";

// Dynamic import with SSR disabled for three.js canvas
const BahiKhataScene = dynamic(
  () => import("@/components/three/BahiKhataScene"),
  { ssr: false }
);

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canLoad3D, setCanLoad3D] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);
  const [hasPlayedMobile, setHasPlayedMobile] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check reduced motion & performance fallbacks
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSaveData = (navigator as any).connection?.saveData;
    const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    const isLowConcurrency = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    if (!prefersReducedMotion && !isSaveData && !isLowMemory && !isLowConcurrency) {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(() => setCanLoad3D(true), { timeout: 1500 });
      } else {
        setTimeout(() => setCanLoad3D(true), 600);
      }
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop scroll progress tracking
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const heroHeight = rect.height;
      const topOffset = -rect.top;
      // Map scroll offset to progress (0 -> 1)
      const progress = Math.max(0, Math.min(1, topOffset / (heroHeight * 0.65)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile play-on-view mechanics per REDESIGN-PROMPT-V3 §7.5
  useEffect(() => {
    if (!isMobile || !stageRef.current || !canLoad3D) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedMobile && !isPlayingMobile) {
            playMobileAnimation();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, [isMobile, canLoad3D, hasPlayedMobile, isPlayingMobile]);

  const playMobileAnimation = () => {
    setIsPlayingMobile(true);
    setHasPlayedMobile(true);
    const duration = 4500; // 4.5 seconds per §7.5
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const p = Math.min(1, elapsed / duration);
      setScrollProgress(p);

      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsPlayingMobile(false);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playMobileAnimation();
  };

  const waHeroUrl = getWhatsAppUrl(
    "Hi Kulvir, I saw your homepage. I'd like to talk about tech for my business."
  );

  return (
    <section
      ref={heroRef}
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-bg"
    >
      {/* Restrained Dot Grid with radial mask */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-[68px] font-display font-[720] text-ink tracking-tight leading-[1.0] font-stretch-h1"
              style={{ fontStretch: "108%" }}
            >
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
                icon={<WhatsAppIcon className="w-5 h-5 text-whatsapp" />}
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
            <div
              ref={stageRef}
              className="relative aspect-[4/4.3] sm:aspect-square w-full max-w-[460px] mx-auto rounded-stage bg-surface border border-line shadow-floating p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Stage header caption in sentence case per §4.2 & §5 */}
              <div className="flex items-center justify-between z-10 pointer-events-none">
                <span className="text-xs font-medium text-ink-3">
                  From registers to real-time.
                </span>
                <div className="flex items-center gap-2 pointer-events-auto">
                  {isMobile && hasPlayedMobile && !isPlayingMobile && (
                    <button
                      onClick={handleReplay}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface border border-line text-[11px] font-medium text-ink hover:text-kk-indigo transition-colors"
                      title="Replay 3D transition"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>Replay</span>
                    </button>
                  )}
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-kk-indigo-050 text-kk-indigo text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-kk-signal animate-pulse" />
                    Live 3D
                  </span>
                </div>
              </div>

              {/* 3D Canvas / Poster Container with cross-fade (Stage never blank per §4.1) */}
              <div className="my-auto relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
                {/* 1. Poster First (Visible immediately, cross-fades out once canvas ready) */}
                <div
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
                    canvasReady ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <img
                    src="/3d/bahi-poster.avif"
                    alt="Traditional Bahi-Khata ledger"
                    className="max-w-[70%] max-h-[85%] object-contain drop-shadow-md select-none"
                    loading="eager"
                    onError={(e) => {
                      // Fallback if AVIF not rendered yet
                      (e.currentTarget as HTMLElement).style.display = "none";
                    }}
                  />
                </div>

                {/* 2. Three.js Canvas */}
                {canLoad3D && (
                  <div
                    className={`w-full h-full transition-opacity duration-500 ${
                      canvasReady ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <BahiKhataScene
                      scrollProgress={scrollProgress}
                      onCanvasReady={() => setCanvasReady(true)}
                    />
                  </div>
                )}
              </div>

              {/* Four service direct links at base (no 1. 2. 3. 4. numbering per §4.6 & §5) */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line text-xs font-semibold z-10">
                <Link
                  href="/services/websites"
                  className="p-2 rounded-lg bg-bg hover:bg-kk-indigo-050 hover:text-kk-indigo text-ink transition-colors flex items-center justify-between"
                >
                  <span>Websites</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <Link
                  href="/services/apps"
                  className="p-2 rounded-lg bg-bg hover:bg-kk-indigo-050 hover:text-kk-indigo text-ink transition-colors flex items-center justify-between"
                >
                  <span>Apps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <Link
                  href="/services/software"
                  className="p-2 rounded-lg bg-bg hover:bg-kk-indigo-050 hover:text-kk-indigo text-ink transition-colors flex items-center justify-between"
                >
                  <span>Business software</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <Link
                  href="/services/automation"
                  className="p-2 rounded-lg bg-bg hover:bg-kk-indigo-050 hover:text-kk-indigo text-ink transition-colors flex items-center justify-between"
                >
                  <span>Automation</span>
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
