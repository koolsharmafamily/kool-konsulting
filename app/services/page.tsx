import React from "react";
import Link from "next/link";
import {
  Zap,
  TrendingUp,
  FileSpreadsheet,
  Code2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Building2,
  Factory,
  Truck,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services & Transparent Pricing | Kool Konsulting Nagpur",
  description:
    "AI automation, digital marketing, business financial planning, and custom software built for businesses in Nagpur and Central India.",
};

const SERVICES_LIST = [
  {
    id: "automation",
    category: "Pillar 1: AI & Workflow Automation",
    badge: "Most Popular for MSMEs",
    name: "The 40-Hour Time Saver (Workflow Automation)",
    tagline: "Hand your repetitive paperwork and follow-ups to software that never forgets.",
    price: "From ₹60,000",
    priceNote: "One-time build fee · Zero monthly per-user software licenses",
    timeline: "Working in your business in 10 to 14 days",
    icon: Zap,
    simpleProblem:
      "Your team spends 3 to 4 hours every single day retyping WhatsApp orders into Excel, tracking down missing invoices, and manually chasing overdue payments.",
    whatWeBuild: [
      "WhatsApp Enquiry Agent: Automatically answers customer queries, shares product catalogs, and collects order details 24/7.",
      "Invoice OCR to Tally: Snap a photo of any purchase bill; our system reads the GSTIN, items, and tax amounts, and posts it straight into Tally Prime.",
      "Automated Payment Chasing: Polite, automated WhatsApp reminders sent on scheduled intervals for overdue invoices with payment links.",
      "Site Muster & Attendance: Daily worker attendance logged via simple WhatsApp voice notes or geo-tagged photos, auto-reconciled.",
      "Full Code & Account Handover: You own the system 100%. No vendor lock-in.",
    ],
    idealFor: "MIDC manufacturers, FMCG distributors, real estate contractors, and wholesale traders.",
  },
  {
    id: "marketing",
    category: "Pillar 2: Digital Marketing & Local Visibility",
    badge: "Direct Revenue Driver",
    name: "Local Presence & Digital Marketing",
    tagline: "Be the business that shows up #1 on Google when local customers search for what you sell.",
    price: "From ₹18,000 / month",
    priceNote: "Minimum 3-month engagement · Month-to-month flexibility afterwards",
    timeline: "Profile live in Week 1 · Ranking movement starts from Week 4",
    icon: TrendingUp,
    simpleProblem:
      "When someone in Nagpur searches for your product or service on Google, three competitors show up on the map. If you are not in those top 3 results, you lose 80% of local phone calls and walk-ins.",
    whatWeBuild: [
      "Google Business Profile Setup & 3-Pack Ranking: Fully optimized profile for your exact catchment areas (MIDC, Sitabuldi, Wardhaman Nagar, Civil Lines, etc.).",
      "Automated 5-Star Review System: A simple WhatsApp link sent to satisfied clients after an order, helping you gather authentic Google reviews steadily.",
      "High-Speed Business Website: Fast, modern, mobile-friendly landing pages that load in under 1 second and turn visitors into phone calls.",
      "Targeted Google Search Ads: We set up campaigns that only bid on serious commercial searches, filtering out casual window-shoppers.",
      "Monthly Plain-English Report: Track actual phone calls, direction requests, and inquiries generated, not confusing marketing jargon.",
    ],
    idealFor: "Healthcare clinics, retail showrooms, B2B industrial suppliers, engineering contractors, and professional practices.",
  },
  {
    id: "strategy",
    category: "Pillar 3: Business Strategy & Financial Modelling",
    badge: "Founder-Led Advisory",
    name: "Business Plans & Financial Modelling",
    tagline: "Get the numbers right before you commit capital to an expansion or bank loan.",
    price: "From ₹45,000",
    priceNote: "One-off advisory project · Bank-ready models with project report from ₹75,000",
    timeline: "2 to 3 weeks depending on historical data available",
    icon: FileSpreadsheet,
    simpleProblem:
      "You want to open a second branch, buy new machinery in MIDC, or apply for a bank loan, but you need clean financial projections and a CMA report that banks and partners actually take seriously.",
    whatWeBuild: [
      "Bank-Ready Financial Model: Complete monthly cash-flow projections, P&L forecasts, and balance sheets formatted for Indian lenders.",
      "Stress-Testing Assumptions: Clear scenarios showing what happens if raw material costs rise 15% or debtor collections slow down by 30 days.",
      "Project Report & Business Plan: Professionally drafted narrative covering market size, competitor analysis, operational plan, and debt repayment schedule.",
      "Working Capital & Break-Even Analysis: Calculate the exact amount of cash cushion needed so your expansion doesn't starve your existing operations.",
      "One-on-One Walkthrough: Kulvir Sharma personally walks you through the spreadsheet so you can confidently answer questions from bank managers and investors.",
    ],
    idealFor: "Business owners planning expansion, raising debt/equity, purchasing industrial land/machinery, or entering a new city.",
  },
  {
    id: "software",
    category: "Pillar 4: Custom Software & Internal Tools",
    badge: "Bespoke Engineering",
    name: "Custom Software & Internal Portals",
    tagline: "Software designed for the way your business actually operates, not a generic American template.",
    price: "From ₹75,000",
    priceNote: "Fixed-quote build · Complete source code and database ownership transferred to you",
    timeline: "3 to 6 weeks from kickoff to deployment",
    icon: Code2,
    simpleProblem:
      "Off-the-shelf software is either too complicated, doesn't handle Indian GST / multi-godown stock, or charges ₹3,000 per user every month while still forcing your team to use Excel on the side.",
    whatWeBuild: [
      "Multi-Godown Stock & Inventory Portal: Live stock counts across multiple godowns and retail counters with barcode scanning and low-stock alerts.",
      "Custom Sales & Dispatch Dashboard: Order tracking from booking to truck loading to invoice delivery, accessible on your phone.",
      "Modern Business Websites: Custom-built websites engineered for speed, search engines, and instant WhatsApp inquiry generation.",
      "Tally & ERP Sync: Connect your custom software directly to Tally Prime or legacy databases without manual double-entry.",
      "Clean Handover & Warranty: 60 days of bug fixes and training for your staff included at no additional cost.",
    ],
    idealFor: "FMCG distributors, multi-branch retailers, logistics companies, and manufacturing plants with custom workflows.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 pb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          Practical Services · Transparent Pricing
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Four Core Services Built for{" "}
          <span className="text-purple-400">Growing Nagpur Businesses</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Whether you need to eliminate manual data entry, get more paying customers from Google, prepare a bank-ready business plan, or build custom software—we quote fixed fees, deliver in weeks, and you own the code.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
        {SERVICES_LIST.map((service, index) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={service.id}>
              <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-6 sm:p-10 hover:border-purple-500/40 transition-colors shadow-xl space-y-8">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/30 text-purple-400 shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          {service.category}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                          {service.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  {/* Pricing badge */}
                  <div className="text-left md:text-right bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 shrink-0">
                    <div className="text-2xl font-heading font-bold text-white">
                      {service.price}
                    </div>
                    <div className="text-xs text-zinc-400 max-w-xs">
                      {service.priceNote}
                    </div>
                  </div>
                </div>

                {/* Subtitle & Problem Statement */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-lg font-heading font-semibold text-white">
                      {service.tagline}
                    </h3>
                    <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-2">
                      <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider block">
                        The Problem This Solves:
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {service.simpleProblem}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between text-zinc-400">
                        <span>Typical Delivery:</span>
                        <span className="text-white font-semibold">{service.timeline}</span>
                      </div>
                      <div className="flex justify-between text-zinc-400 pt-1 border-t border-zinc-800">
                        <span>Best Suited For:</span>
                        <span className="text-purple-300 text-right">{service.idealFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* What you actually get */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                      What We Actually Build & Deliver:
                    </span>
                    <div className="space-y-3">
                      {service.whatWeBuild.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs sm:text-sm text-zinc-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-zinc-400 font-mono">
                    ✓ Fixed quotes with defined deliverables. Zero hidden charges.
                  </span>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-heading font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`https://wa.me/918888821351?text=Hi%20Kulvir,%20I'm%20interested%20in%20learning%20more%20about:%20${encodeURIComponent(
                        service.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                      title="WhatsApp about this service"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Comparison: Why Work With Kool Konsulting */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Why Central India Businesses Work With Us
            </h3>
            <p className="text-sm text-zinc-400">
              Clear commitments, senior execution, and zero unnecessary agency layers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                01
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                You Deal Directly with the Architect
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No junior sales executives or middle account managers. Kulvir Sharma personally designs, tests, and oversees your system.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                02
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                You Own All The Code & Data
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every line of code, database, and Google account is registered in your name. If you ever stop working with us, your systems keep running.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                03
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                Local Understanding of Nagpur
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We understand how business actually works here: Tally Prime accounting, local transport routes, GST deadlines, and WhatsApp habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4 space-y-6">
        <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white">
          Not Sure Which Service You Need First?
        </h3>
        <p className="text-zinc-300 text-base max-w-2xl mx-auto">
          Book a quick 20-minute consultation. We’ll look at your current operations, identify the fastest way to save hours or generate new sales, and tell you plainly what it costs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors"
          >
            Book Free 20-Min Call
          </Link>
          <a
            href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20discuss%20which%20service%20makes%20the%20most%20sense%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 hover:text-emerald-400 bg-zinc-900 border border-zinc-800 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp (+91 88888 21351)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
