"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Case Studies", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800 shadow-lg"
          : "bg-transparent border-b border-zinc-900/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 group-hover:border-purple-500 transition-colors shadow-sm">
              <svg
                viewBox="0 0 100 100"
                className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="square"
              >
                <path d="M20 12 V88" />
                <path d="M20 50 L56 14" />
                <path d="M20 50 L56 86" />
                <path d="M80 12 V88" />
                <path d="M80 50 L44 14" />
                <path d="M80 50 L44 86" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-purple-200 transition-colors">
                KOOL <span className="text-purple-400">KONSULTING</span>
              </span>
              <span className="text-[11px] text-zinc-400 font-sans tracking-wide">
                AI · Software · Marketing · Nagpur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-800">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-purple-600/30 border border-purple-500/40"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20talk%20about%20automating%20and%20growing%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-900/20 transition-all active:scale-[0.98]"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/918888821351"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-emerald-500/30 text-emerald-400"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#09090B] border-b border-zinc-800 px-6 pt-4 pb-8 space-y-4">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-white bg-purple-600/20 border border-purple-500/30 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-center font-semibold text-white bg-purple-600 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free 30-Min Consultation</span>
            </Link>
            <a
              href="https://wa.me/918888821351"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp (+91 88888 21351)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
