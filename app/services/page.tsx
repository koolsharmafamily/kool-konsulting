import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICES = [
  {
    id: "automation",
    name: "AI & Workflow Automation",
    tagline: "Stop paying staff to do mechanical data entry.",
    simpleProblem: "Your team is spending hours copying GST numbers from WhatsApp into Excel, or manually creating sales vouchers in Tally. Humans make typos; humans take leaves. Software does neither.",
    timeline: "7 - 14 Days",
    idealFor: "Manufacturers, Distributors & Traders",
    whatWeBuild: [
      "WhatsApp Bots that take orders from clients and punch them directly into Tally.",
      "Email parsers that automatically read supplier invoices and log the details.",
      "Automated WhatsApp reminders to clients with outstanding balances."
    ]
  },
  {
    id: "marketing",
    name: "Local SEO & Digital Marketing",
    tagline: "Dominate Google Maps & Local Search in Nagpur.",
    simpleProblem: "When someone in Nagpur searches Google for what you sell, your competitors show up first. You are losing high-intent buyers who are ready to purchase right now.",
    timeline: "Monthly Retainer",
    idealFor: "Retailers, Real Estate & Local Services",
    whatWeBuild: [
      "Rank #1 in Google Maps for MIDC, Sitabuldi, Civil Lines, etc.",
      "Automated WhatsApp review generator after every successful sale.",
      "Monthly report showing verified incoming phone calls and leads."
    ]
  },
  {
    id: "strategy",
    name: "Financial Models & Business Plans",
    tagline: "Bank-Ready Business Plans & CMA Reports.",
    simpleProblem: "You want to expand your factory in Butibori or apply for a bank loan, but you don't have the rigorous financial projections, CMA data, or formal pitch deck that investors and bank managers require.",
    timeline: "14 - 21 Days",
    idealFor: "Businesses seeking Capital or Bank Loans",
    whatWeBuild: [
      "3-scenario financial model (expected, conservative, downside).",
      "CMA data & project report formatted for Indian bank managers.",
      "Personal walkthrough so you can answer lender questions easily."
    ]
  },
  {
    id: "software",
    name: "Custom Software Development",
    tagline: "Web Apps & Internal Portals built specifically for you.",
    simpleProblem: "You are running a ₹10Cr+ business on 15 broken Excel sheets that nobody understands except the accountant. Off-the-shelf software is too bloated and expensive.",
    timeline: "21 - 45 Days",
    idealFor: "Scaling Operations & Logistics",
    whatWeBuild: [
      "Multi-godown stock count & dispatch tracking on your mobile phone.",
      "Fast, conversion-focused business websites that bring inquiries.",
      "Full source code handover: you own it forever with zero seat fees."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* 1. Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5 inline-block">
              Core Capabilities
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-tight">
              Systems &<br/>Architecture.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-mono">
              We deploy four core operational systems designed specifically for growing businesses, manufacturers, and traders in Central India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="py-24">
        {SERVICES.map((service, idx) => (
          <ScrollReveal key={service.id} delay={idx * 0.1}>
            <div 
              id={service.id} 
              className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${idx !== SERVICES.length - 1 ? 'mb-24 md:mb-32' : ''}`}
            >
              <div className="border border-white/15 bg-[#050505] grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Side: Context */}
                <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
                  <div className="space-y-6">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      SYSTEM {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
                      {service.name}
                    </h2>
                    <p className="text-sm font-mono text-neutral-300 leading-relaxed">
                      {service.tagline}
                    </p>
                    
                    <div className="pt-6 space-y-3">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                        The Bottleneck
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                        {service.simpleProblem}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 space-y-4 border-t border-white/15 pt-6 text-xs font-mono">
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>Typical Delivery</span>
                      <span className="text-white font-bold">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>Best Suited For</span>
                      <span className="text-terminal-green text-right">{service.idealFor}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Architecture Deliverables */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                      Architecture & Deliverables
                    </span>
                    <div className="space-y-4">
                      {service.whatWeBuild.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 border border-white/10 bg-black text-sm text-neutral-300 font-mono"
                        >
                          <Check className="w-5 h-5 text-terminal-green shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/15">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-terminal-green transition-colors"
                    >
                      <span>Initialize Audit For This System</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* 3. Comparison: Why Work With Kool Konsulting */}
      <section className="py-24 bg-[#050505] border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              Operational Differences
            </h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
              Why Central India Businesses Work With Us.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/15 bg-black">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/15 space-y-6">
              <div className="text-3xl font-mono text-neutral-600 font-bold">01</div>
              <h4 className="font-sans font-bold text-xl text-white">
                Deal Directly with the Architect
              </h4>
              <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                No junior sales executives or middle account managers. Kulvir Sharma personally designs, tests, and oversees your system.
              </p>
            </div>

            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/15 space-y-6">
              <div className="text-3xl font-mono text-neutral-600 font-bold">02</div>
              <h4 className="font-sans font-bold text-xl text-white">
                You Own All The Code & Data
              </h4>
              <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                Every line of code, database, and Google account is registered in your name. If you ever stop working with us, your systems keep running.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-6">
              <div className="text-3xl font-mono text-neutral-600 font-bold">03</div>
              <h4 className="font-sans font-bold text-xl text-white">
                Local Understanding of Nagpur
              </h4>
              <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                We understand how business actually works here: Tally Prime accounting, local transport routes, GST deadlines, and WhatsApp habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to action */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4 space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tighter leading-tight">
          Not Sure Which System You Need First?
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-mono">
          Book a quick 20-minute consultation. We’ll look at your current operations, identify the fastest way to save hours or generate new sales, and tell you plainly what it costs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto brutalist-button px-10 py-4 text-sm"
          >
            Deploy Systems
          </Link>
          <a
            href="https://wa.me/918888821351"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto brutalist-button-outline px-10 py-4 text-sm"
          >
            WhatsApp Us (+91 88888 21351)
          </a>
        </div>
      </section>
    </div>
  );
}
