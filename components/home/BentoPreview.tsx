"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  TrendingUp,
  FileSpreadsheet,
  Code2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  IndianRupee,
} from "lucide-react";

export default function BentoPreview() {
  return (
    <section className="py-20 bg-[#09090B] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Four Proven Pillars · Nagpur
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            How We Help Your Business <span className="text-purple-400">Save Time & Grow</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300">
            Real systems built for manufacturers in MIDC, traders in Wardhaman Nagar & Sitabuldi, and expanding businesses across Central India.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1: AI & Workflow Automation */}
          <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-7 sm:p-8 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  From ₹60,000 one-off
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                  Pillar 1: Automation & AI
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                  The 40-Hour Time Saver (Workflows)
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Stop paying staff to manually retype WhatsApp orders into Excel and Tally. We build automated bots that extract purchase bills, record attendance, and chase overdue payments automatically.
              </p>

              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Scan invoice photo on WhatsApp → Auto-sync to Tally Prime in 4s</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Scheduled payment reminder messages with UPI payment links</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Daily site worker muster logged by audio/photo on WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">~30 to 45 hours saved per week</span>
              <Link
                href="/services"
                className="text-white hover:text-purple-400 flex items-center gap-1 font-sans font-semibold group"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Local Marketing & Google Maps */}
          <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-7 sm:p-8 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  From ₹18,000 / month
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                  Pillar 2: Digital Marketing
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                  Local Dominance & Google 3-Pack
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                When someone in Nagpur searches Google for what you sell, be the first business they see. We rank your Google Maps profile in the top 3, collect 5-star reviews automatically, and run search ads that generate real calls.
              </p>

              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Rank #1 in Google Maps for MIDC, Sitabuldi, Civil Lines, etc.</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Automated WhatsApp review generator after every successful sale</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Monthly report showing verified incoming phone calls and leads</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">Steady stream of local buyer calls</span>
              <Link
                href="/services"
                className="text-white hover:text-purple-400 flex items-center gap-1 font-sans font-semibold group"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Business Strategy & Financial Modelling */}
          <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-7 sm:p-8 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  From ₹45,000 one-off
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                  Pillar 3: Strategy & Financial Planning
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                  Bank-Ready Business Plans & Models
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Planning to expand, buy new machinery in Butibori, or apply for a bank loan? Get a rigorous financial model, monthly cash-flow forecast, and professional CMA project report prepared by a University of Melbourne finance graduate.
              </p>

              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>3-scenario financial model (expected, conservative, downside)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>CMA data & project report formatted for Indian bank managers</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Personal walkthrough so you can answer lender questions easily</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">Approved by lenders & investors</span>
              <Link
                href="/services"
                className="text-white hover:text-purple-400 flex items-center gap-1 font-sans font-semibold group"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 4: Custom Software & Internal Tools */}
          <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-7 sm:p-8 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  From ₹75,000 fixed
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                  Pillar 4: Custom Software Development
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                  Custom Software & Internal Portals
                </h3>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Replace cluttered spreadsheets with simple, fast software built for your business. Multi-godown stock trackers, sales rep order apps, and custom dashboards. You own 100% of the code—no recurring monthly software rent.
              </p>

              <div className="space-y-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Multi-godown stock count & dispatch tracking on your mobile phone</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Fast, conversion-focused business websites that bring inquiries</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Full source code handover: you own it forever with zero seat fees</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">100% intellectual property ownership</span>
              <Link
                href="/services"
                className="text-white hover:text-purple-400 flex items-center gap-1 font-sans font-semibold group"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
