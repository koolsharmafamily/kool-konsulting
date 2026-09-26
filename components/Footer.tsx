import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, MapPin, Zap, TrendingUp, FileSpreadsheet, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-obsidian pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-white/10">
                <span className="font-heading font-bold text-white text-sm">K</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Kool Konsulting
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              AI automation, local marketing, business financial planning, and custom software for manufacturers, traders, and growing businesses in Central India.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono bg-emerald-950/30 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Q4 Projects
              </span>
            </div>
          </div>

          {/* Column 2: The 4 Core Pillars */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-200">
              Capabilities
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/services#automation" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>AI & Workflow Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Local SEO & Lead Gen</span>
                </Link>
              </li>
              <li>
                <Link href="/services#strategy" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Strategy & Financial Models</span>
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Custom Software Development</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services & Pricing</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About the Founder</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Discovery Call</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-200">
              Direct Contact
            </h3>
            <div className="space-y-3 pt-1 text-sm text-slate-400">
              <a href="https://wa.me/918888821351" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 88888 21351</span>
              </a>
              <a href="tel:+918888821351" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call: +91 88888 21351</span>
              </a>
              <a href="mailto:hello@koolkonsulting.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@koolkonsulting.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kool Konsulting. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <span>You Own The Code</span>
            <span>Zero Vendor Lock-in</span>
            <span className="font-mono text-slate-400">MIDC · Sitabuldi · Wardhaman Nagar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
