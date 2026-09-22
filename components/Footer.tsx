import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight, Zap, TrendingUp, FileSpreadsheet, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#09090B] border-t border-zinc-800 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-700">
                <svg
                  viewBox="0 0 100 100"
                  className="w-5 h-5 text-purple-400"
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
              <span className="font-heading font-bold text-lg text-white">
                KOOL <span className="text-purple-400">KONSULTING</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              AI automation, local marketing, business financial planning, and custom software for manufacturers, traders, and growing businesses in Central India.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Projects
              </span>
            </div>
          </div>

          {/* Column 2: The 4 Core Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-300">
              Our 4 Core Services
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/services#automation" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>AI & Workflow Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Local SEO & Google Maps Ranking</span>
                </Link>
              </li>
              <li>
                <Link href="/services#strategy" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Business Plans & Financial Models</span>
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="hover:text-purple-300 transition-colors flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Custom Software & Web Portals</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-300">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Kulvir Sharma
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Channels */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-300">
              Direct Contact
            </h3>
            <p className="text-xs text-zinc-400">
              Speak directly with the architect. No middle layers.
            </p>
            <div className="space-y-2.5 pt-1 text-sm font-mono">
              <a
                href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20talk%20about%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>WhatsApp: +91 88888 21351</span>
              </a>

              <a
                href="tel:+918888821351"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-purple-300 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call: +91 88888 21351</span>
              </a>

              <a
                href="mailto:hello@koolkonsulting.com"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-purple-300 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@koolkonsulting.com</span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-400 text-xs">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Kool Konsulting. Built for pragmatic businesses in Central India.
          </div>
          <div className="flex items-center gap-4">
            <span>You Own The Code.</span>
            <span>Zero Vendor Lock-in.</span>
            <span className="text-zinc-600 font-mono">MIDC · Sitabuldi · Wardhaman Nagar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
