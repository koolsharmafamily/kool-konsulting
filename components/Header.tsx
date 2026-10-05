"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { servicePricing } from "@/data/pricing";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ChevronDown, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waHeaderUrl = getWhatsAppUrl("Hi Kulvir, I'm visiting your website and would like to chat.");

  return (
    <>
      <header
        className={`sticky top-0 z-40 h-[72px] transition-all duration-200 border-b ${
          scrolled
            ? "bg-bg/80 backdrop-blur-md border-line shadow-sm"
            : "bg-bg/95 border-transparent"
        }`}
      >
        <div className="max-w-[1200px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with first-load animation */}
          <Logo animated={true} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[16px] font-sans font-medium text-ink">
            {/* Services with Hover/Click Flyout */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="inline-flex items-center gap-1.5 py-2 hover:text-kk-indigo transition-colors"
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    servicesOpen ? "rotate-180 text-kk-indigo" : "text-ink-3"
                  }`}
                />
              </button>

              {/* Flyout panel */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-surface rounded-card p-3 border border-line shadow-floating space-y-1">
                  {Object.values(servicesData).map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block p-3 rounded-lg hover:bg-bg transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-ink group-hover:text-kk-indigo text-sm">
                          {svc.name}
                        </span>
                        <span className="text-xs text-ink-3 tabular-nums">
                          From {servicePricing[svc.slug]?.startingPriceDisplay}
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 mt-0.5 line-clamp-1">
                        {svc.lead}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-line mt-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block text-center text-xs font-semibold text-kk-indigo hover:underline py-1"
                    >
                      View all 4 services overview
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/work" className="hover:text-kk-indigo transition-colors">
              Work
            </Link>
            <Link href="/pricing" className="hover:text-kk-indigo transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-kk-indigo transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="whatsapp"
              href={waHeaderUrl}
              className="text-sm px-5 py-2.5"
            >
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={waHeaderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-11 h-11 rounded-btn bg-whatsapp flex items-center justify-center text-ink"
            >
              <WhatsAppIcon className="w-5 h-5 text-ink" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-11 h-11 rounded-btn border border-line flex items-center justify-center text-ink hover:bg-surface"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-50 bg-bg flex flex-col justify-between p-6 overflow-y-auto md:hidden animate-in fade-in duration-150">
          <nav className="space-y-4 pt-4">
            <div className="border-b border-line pb-4">
              <span className="text-xs text-ink-3 block mb-2 font-medium">
                Services
              </span>
              <div className="space-y-3">
                {Object.values(servicesData).map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-between items-center py-1 text-lg font-semibold text-ink"
                  >
                    <span>{svc.name}</span>
                    <span className="text-xs font-normal text-ink-3">
                      From {servicePricing[svc.slug]?.startingPriceDisplay}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-bold text-ink"
              >
                Work & Case Studies
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-bold text-ink"
              >
                Pricing & Care Plans
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-bold text-ink"
              >
                About Kulvir Sharma
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-bold text-ink"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-bold text-kk-indigo"
              >
                Free Tech Check-up
              </Link>
            </div>
          </nav>

          <div className="pt-8 border-t border-line space-y-3">
            <Button
              variant="whatsapp"
              href={waHeaderUrl}
              className="w-full justify-center"
            >
              WhatsApp (+91 88888 21351)
            </Button>
            <Button
              variant="secondary"
              href="tel:+918888821351"
              className="w-full justify-center"
            >
              Call Kulvir Directly
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
