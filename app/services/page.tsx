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
  Sparkles,
  ArrowDownToLine,
  Building2,
  Factory,
  Truck,
  HeartHandshake
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services & Engagement Models | Kool Konsulting Nagpur",
  description:
    "AI automation, digital marketing, business financial planning, and custom software. Fixed pricing and transparent scopes for MSMEs in Central India.",
};

const SERVICES_LIST = [
  {
    id: "automation",
    category: "Operations",
    badge: "Most Popular for Manufacturers",
    name: "AI & Workflow Automation",
    tagline: "The 40-Hour Time Saver",
    price: "From ₹60,000",
    priceNote: "One-time build fee · Zero monthly seat licenses",
    timeline: "Deployed in 10-14 days",
    icon: Zap,
    simpleProblem:
      "Your team spends 3 to 4 hours every single day retyping WhatsApp orders into Excel, tracking down missing invoices, and manually chasing overdue payments.",
    whatWeBuild: [
      "WhatsApp Enquiry Agent: Automatically answers queries, shares catalogs, and collects order details 24/7.",
      "Invoice OCR to Tally: Snap a photo of a purchase bill; our system reads the GSTIN and posts it straight into Tally Prime.",
      "Automated Payment Chasing: Polite WhatsApp reminders sent on scheduled intervals with payment links.",
      "Site Muster & Attendance: Daily worker attendance logged via WhatsApp voice notes or photos, auto-reconciled.",
      "Complete Code Handover: You own the system 100%. No vendor lock-in.",
    ],
    idealFor: "MIDC manufacturers, FMCG distributors, real estate contractors.",
  },
  {
    id: "marketing",
    category: "Growth",
    badge: "Direct Revenue Driver",
    name: "Local SEO & Digital Marketing",
    tagline: "Local Dominance in Google's 3-Pack",
    price: "From ₹18,000 / month",
    priceNote: "Minimum 3-month engagement · Month-to-month after",
    timeline: "Ranking movement from Week 4",
    icon: TrendingUp,
    simpleProblem:
      "When someone in Nagpur searches for your service on Google, three competitors show up on the map. If you are not in those top 3, you lose 80% of local phone calls.",
    whatWeBuild: [
      "Google Business Profile Setup & Ranking: Optimized for exact catchment areas (MIDC, Sitabuldi, Wardhaman Nagar).",
      "Automated 5-Star Review System: WhatsApp link sent after every order to gather authentic Google reviews steadily.",
      "High-Speed Landing Pages: Fast, mobile-friendly websites that load under 1 second to maximize call conversions.",
      "Targeted Google Search Ads: Campaigns that only bid on serious commercial searches, filtering out window-shoppers.",
      "Monthly Plain-English Report: Tracking actual phone calls, direction requests, and inquiries generated.",
    ],
    idealFor: "Healthcare clinics, retail showrooms, B2B industrial suppliers.",
  },
  {
    id: "strategy",
    category: "Finance",
    badge: "Founder-Led Advisory",
    name: "Business Plans & Financial Models",
    tagline: "Bank-Ready Project Reports",
    price: "From ₹45,000",
    priceNote: "One-off advisory project",
    timeline: "2 to 3 weeks delivery",
    icon: FileSpreadsheet,
    simpleProblem:
      "You want to open a second branch or apply for a bank loan, but you need clean financial projections and a CMA report that banks take seriously.",
    whatWeBuild: [
      "Bank-Ready Financial Model: Monthly cash-flow projections, P&L forecasts, and balance sheets formatted for lenders.",
      "Stress-Testing Scenarios: Showing what happens if raw material costs rise 15% or collections slow down.",
      "Project Report & Business Plan: Narrative covering market size, competitor analysis, and debt repayment schedule.",
      "Working Capital Analysis: Calculate the exact cash cushion needed so expansion doesn't starve existing operations.",
      "One-on-One Walkthrough: Kulvir Sharma walks you through the spreadsheet to prepare you for bank managers.",
    ],
    idealFor: "Business owners planning expansion, raising debt, or purchasing land.",
  },
  {
    id: "software",
    category: "Engineering",
    badge: "Bespoke Architecture",
    name: "Custom Software & Portals",
    tagline: "Software designed for your actual workflow",
    price: "From ₹75,000",
    priceNote: "Fixed-quote build · Complete ownership",
    timeline: "3 to 6 weeks from kickoff",
    icon: Code2,
    simpleProblem:
      "Off-the-shelf software doesn't handle Indian GST / multi-godown stock well, charges ₹3,000/user, and forces your team to use Excel on the side.",
    whatWeBuild: [
      "Multi-Godown Stock Portal: Live stock counts across godowns and retail counters with barcode scanning.",
      "Custom Sales Dashboard: Order tracking from booking to truck loading to invoice delivery, on your phone.",
      "Tally & ERP Sync: Connect your custom software directly to Tally Prime without manual double-entry.",
      "Modern Web Applications: Custom web apps engineered for speed and conversion.",
      "Clean Handover & Warranty: 60 days of bug fixes and training for your staff included.",
    ],
    idealFor: "Multi-branch retailers, logistics companies, and manufacturing plants.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-20 space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/30 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Engagement Models
          </div>
          
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Transparent Scopes. <br />
            <span className="text-amber-500">Fixed Pricing.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you need to eliminate manual data entry, get more paying customers from Google, prepare a bank-ready business plan, or build custom software—we quote fixed fees and you own the IP.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
        {SERVICES_LIST.map((service, index) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={service.id} delay={0.1}>
              <div id={service.id} className="scroll-mt-32 rounded-3xl surface-card p-6 sm:p-10 hover:border-amber-500/30 transition-all space-y-8 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/5 pb-8 relative z-10">
                  <div className="flex items-start sm:items-center gap-5">
                    <div className="p-4 rounded-xl bg-obsidian border border-white/10 text-amber-500 shrink-0 shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                          {service.category}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/30 px-2 py-0.5 rounded-sm border border-amber-500/20">
                          {service.badge}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                        {service.name}
                      </h2>
                      <p className="text-slate-400 text-sm mt-1">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Pricing badge */}
                  <div className="text-left md:text-right bg-obsidian p-4 rounded-xl border border-white/5 shrink-0 min-w-[200px]">
                    <div className="text-2xl font-heading font-bold text-white">
                      {service.price}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">
                      {service.priceNote}
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                  {/* Left Column: Context */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-2">
                        <ArrowDownToLine className="w-4 h-4" />
                        The Bottleneck
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed bg-obsidian p-5 rounded-xl border border-white/5">
                        {service.simpleProblem}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                        Engagement Details
                      </h4>
                      <ul className="space-y-2 text-xs font-mono">
                        <li className="flex justify-between items-center py-2 border-b border-white/5 text-slate-300">
                          <span>Timeline</span>
                          <span className="text-white font-semibold">{service.timeline}</span>
                        </li>
                        <li className="flex flex-col py-2 gap-1 text-slate-300">
                          <span>Best Suited For:</span>
                          <span className="text-amber-400">{service.idealFor}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Deliverables */}
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold mb-4">
                      What We Build & Deliver
                    </h4>
                    <div className="space-y-3">
                      {service.whatWeBuild.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-xl bg-obsidian/50 border border-white/5 text-sm text-slate-300 transition-colors hover:bg-obsidian"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6 mt-2 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <span className="text-xs text-slate-500 font-mono">
                    ✓ Fixed quotes with defined deliverables. Zero hidden charges.
                  </span>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-heading font-bold text-obsidian bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
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
                      className="p-2.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]"
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

      {/* Comparison Table Section */}
      <section className="py-24 bg-obsidian-light border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              The Kool Konsulting Difference
            </h3>
            <p className="text-lg text-slate-400">
              Clear commitments, senior execution, and zero unnecessary agency layers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 font-medium">Feature</th>
                  <th className="py-4 px-6 font-semibold text-amber-500 bg-amber-950/10 rounded-t-lg">Kool Konsulting</th>
                  <th className="py-4 px-6 font-medium">Typical Agency</th>
                  <th className="py-4 px-6 font-medium">SaaS Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-medium">Point of Contact</td>
                  <td className="py-4 px-6 bg-amber-950/10 font-medium text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500"/> Direct with Architect</td>
                  <td className="py-4 px-6 text-slate-500">Junior Account Manager</td>
                  <td className="py-4 px-6 text-slate-500">Support Ticket Queue</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-medium">Code/IP Ownership</td>
                  <td className="py-4 px-6 bg-amber-950/10 font-medium text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500"/> 100% Yours</td>
                  <td className="py-4 px-6 text-slate-500">Agency Owned</td>
                  <td className="py-4 px-6 text-slate-500">Rented Monthly</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-medium">Pricing Model</td>
                  <td className="py-4 px-6 bg-amber-950/10 font-medium text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500"/> Fixed Price Scopes</td>
                  <td className="py-4 px-6 text-slate-500">Billable Hours (Bloated)</td>
                  <td className="py-4 px-6 text-slate-500">Per-User Monthly Fees</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 font-medium">Local Market Context</td>
                  <td className="py-4 px-6 bg-amber-950/10 font-medium text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500"/> Built for Central India</td>
                  <td className="py-4 px-6 text-slate-500">Generic Templates</td>
                  <td className="py-4 px-6 text-slate-500">US-Centric Defaults</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4 space-y-8">
        <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Ready to map your business bottlenecks?
        </h3>
        <p className="text-slate-300 text-lg">
          Book a 30-minute diagnostic. We’ll identify the fastest way to save hours or generate new sales, and tell you plainly what it costs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-heading font-bold text-sm text-obsidian bg-amber-500 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.25)]"
          >
            Book Free Diagnostic
          </Link>
          <a
            href="https://wa.me/918888821351"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-lg font-semibold text-sm text-slate-200 hover:text-emerald-400 bg-surface border border-white/10 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
