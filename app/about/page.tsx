import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* 1. Header & Bio */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5 inline-block">
                Founder & Tech Architect
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-[1.05]">
                Bridging Finance, Strategy & Software.
              </h1>
              
              <div className="space-y-6 text-sm md:text-base font-mono text-neutral-400 leading-relaxed max-w-2xl">
                <p>
                  Most software agencies in India fail because of a communication gap: the business owner talks to a non-technical sales rep, who translates it to a project manager, who outsources it to a junior coder who doesn't know what gross profit margin means.
                </p>
                <p>
                  At Kool Konsulting, we bridge finance, strategy, and modern software engineering. We understand balance sheets, working capital cycles, and Indian GST rules as deeply as we understand Python, WhatsApp APIs, and Next.js.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto brutalist-button px-8 py-4 text-sm flex items-center justify-center"
                >
                  Book a 20-Min Call with Kulvir
                </Link>

                <a
                  href="https://wa.me/918888821351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto brutalist-button-outline px-8 py-4 text-sm flex items-center justify-center gap-2"
                >
                  <span>WhatsApp (+91 88888 21351)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm border border-white/15 bg-[#050505] p-4">
                <img
                  src="/kulvir-sharma.webp"
                  alt="Kulvir Sharma - Tech Architect"
                  className="w-full h-auto grayscale filter contrast-125"
                />
                <div className="mt-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex justify-between">
                  <span>Kulvir Sharma</span>
                  <span>Nagpur, IN</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Background & Credentials */}
      <section className="py-24 bg-[#050505] border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              Professional Background
            </h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
              Credentials & Training.
            </h3>
            <p className="text-sm font-mono text-neutral-400">
              Rigorous corporate finance education combined with practical engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/15 bg-black">
            
            <div className="p-8 md:p-12 border-b md:border-r border-white/15 space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-terminal-green uppercase tracking-widest">
                  2022 – 2026
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Education
                </span>
              </div>
              <h4 className="font-sans font-bold text-2xl text-white">
                Bachelor of Commerce (Finance & Management)
              </h4>
              <div className="text-sm font-mono text-neutral-300">The University of Melbourne, Australia</div>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                Trained in financial econometrics, operational capital planning, and corporate strategy at Australia's leading commerce institution.
              </p>
            </div>

            <div className="p-8 md:p-12 border-b border-white/15 space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-terminal-green uppercase tracking-widest">
                  Professional Experience
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Corporate Advisory
                </span>
              </div>
              <h4 className="font-sans font-bold text-2xl text-white">
                M&A and Corporate Advisory
              </h4>
              <div className="text-sm font-mono text-neutral-300">Financial Modelling & Valuations</div>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                Conducted valuations, business plans, and due-diligence data rooms for acquisitions. Knows what banks and investors look for in financial figures.
              </p>
            </div>

            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/15 space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-terminal-green uppercase tracking-widest">
                  Education
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Systems
                </span>
              </div>
              <h4 className="font-sans font-bold text-2xl text-white">
                Digital Systems & Marketing Architecture
              </h4>
              <div className="text-sm font-mono text-neutral-300">SSCBS, University of Delhi</div>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                Specialized in search algorithms, local digital presence, and high-conversion client acquisition funnels.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-terminal-green uppercase tracking-widest">
                  Current
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Operations
                </span>
              </div>
              <h4 className="font-sans font-bold text-2xl text-white">
                Founder & Tech Architect
              </h4>
              <div className="text-sm font-mono text-neutral-300">Kool Konsulting, Nagpur</div>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                Personally builds and deploys production AI workflows, Tally automations, and custom dashboards for Central India businesses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 4 Guarantees */}
      <section className="py-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              Standard Operating Procedure
            </h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
              Our 4 Promises to You.
            </h3>
            <p className="text-sm font-mono text-neutral-400">
              How we protect your business, your data, and your money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/15 bg-black">
            {[
              {
                title: "You Own Everything",
                desc: "Every line of software code, database, and marketing profile belongs to you. Zero vendor lock-in.",
              },
              {
                title: "Fixed Price Quotes",
                desc: "No open-ended hourly billing or runaway costs. We define the scope, give you a fixed quote, and stick to it.",
              },
              {
                title: "Fast Delivery",
                desc: "Most automation systems and marketing setups are delivered within 10 to 14 business days.",
              },
              {
                title: "Direct Access",
                desc: "You have direct access to Kulvir via phone and WhatsApp throughout the project and afterwards.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-8 space-y-6 ${idx !== 3 ? 'border-b lg:border-b-0 lg:border-r border-white/15' : ''} ${idx === 0 || idx === 1 ? 'md:border-b' : ''} ${idx === 1 ? 'md:border-r-0 lg:border-r' : ''}`}
              >
                <div className="text-3xl font-mono text-neutral-600 font-bold">0{idx + 1}</div>
                <h4 className="font-sans font-bold text-xl text-white">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Call to action */}
      <section className="py-32 text-center max-w-4xl mx-auto px-4 space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tighter leading-tight">
          Ready to Automate or Grow Your Business?
        </h2>
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
