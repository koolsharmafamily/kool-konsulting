"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const PILLARS = [
  {
    id: "automation",
    title: "AI & Workflow Automation",
    price: "From ₹60,000",
    desc: "Replace manual data entry with bots that extract bills, record attendance, and chase payments automatically.",
    mockup: (
      <div className="font-mono text-[10px] text-neutral-400 leading-tight space-y-1">
        <div className="flex gap-2"><span className="text-white">SYS&gt;</span><span>Awaiting payload...</span></div>
        <div className="flex gap-2"><span className="text-terminal-green">OK&gt;</span><span>Invoice_882.pdf parsed</span></div>
        <div className="flex gap-2"><span className="text-white">API&gt;</span><span>Pushing to Tally Prime...</span></div>
        <div className="flex gap-2"><span className="text-terminal-green">OK&gt;</span><span>Voucher created.</span></div>
      </div>
    )
  },
  {
    id: "marketing",
    title: "Local SEO & Marketing",
    price: "From ₹18,000 / mo",
    desc: "Rank your Google Maps profile in the top 3 and run search ads that generate real phone calls.",
    mockup: (
      <div className="bg-white text-black p-3 font-sans text-xs space-y-2 border border-neutral-300">
        <div className="flex justify-between items-center font-bold">
          <span>Kool Konsulting</span>
          <span>5.0 ★★★★★</span>
        </div>
        <div className="text-[10px] text-neutral-600">"They automated our entire warehouse tracking. Saved us 20 hours a week."</div>
        <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono mt-1">12 minutes ago</div>
      </div>
    )
  },
  {
    id: "strategy",
    title: "Financial Models",
    price: "From ₹45,000",
    desc: "Rigorous financial models, cash-flow forecasts, and CMA project reports for Indian bank managers.",
    mockup: (
      <div className="w-full border border-white/10 font-mono text-[9px]">
        <div className="grid grid-cols-3 bg-white/10 p-1 text-white">
          <span>Q1 2024</span><span>Rev</span><span>EBITDA</span>
        </div>
        <div className="grid grid-cols-3 p-1 text-neutral-400 border-b border-white/5">
          <span>Jan</span><span>₹1.2M</span><span className="text-terminal-green">+14%</span>
        </div>
        <div className="grid grid-cols-3 p-1 text-neutral-400 border-b border-white/5">
          <span>Feb</span><span>₹1.4M</span><span className="text-terminal-green">+18%</span>
        </div>
        <div className="grid grid-cols-3 p-1 text-neutral-400">
          <span>Mar</span><span>₹1.7M</span><span className="text-terminal-green">+22%</span>
        </div>
      </div>
    )
  },
  {
    id: "software",
    title: "Custom Software",
    price: "From ₹75,000",
    desc: "Replace spreadsheets with multi-godown stock trackers. You own 100% of the code—no monthly rent.",
    mockup: (
      <div className="font-mono text-[10px] text-neutral-500 leading-tight">
        <span className="text-pink-500">export const</span> <span className="text-blue-400">InventorySync</span> = () =&gt; {"{"}<br/>
        &nbsp;&nbsp;<span className="text-pink-500">const</span> stock = <span className="text-yellow-200">await</span> fetchTallyAPI();<br/>
        &nbsp;&nbsp;<span className="text-pink-500">if</span> (stock.low) alertManager();<br/>
        &nbsp;&nbsp;<span className="text-pink-500">return</span> <span className="text-terminal-green">"SYNC_COMPLETE"</span>;<br/>
        {"}"}
      </div>
    )
  },
];

export default function BentoPreview() {
  return (
    <section className="py-24 bg-black border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
              [ Core Systems ]
            </h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
              Deployment Capabilities.
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/15">
          {PILLARS.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 0.1}>
              <div className={`p-8 h-full flex flex-col justify-between ${idx % 2 === 0 ? 'border-b md:border-r border-white/15' : 'border-b border-white/15'}`}>
                
                <div className="mb-8">
                  {/* The "Reality" Mockup Box */}
                  <div className="h-32 w-full bg-[#050505] border border-white/10 flex items-center justify-center p-4 overflow-hidden mb-6">
                    {pillar.mockup}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-sans font-bold text-white">
                      {pillar.title}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-500 bg-white/5 px-2 py-1 border border-white/10">
                      {pillar.price}
                    </span>
                  </div>

                  <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <Link
                    href={`/services#${pillar.id}`}
                    className="text-xs font-mono uppercase tracking-widest text-white hover:text-neutral-400 transition-colors"
                  >
                    Examine Architecture &rarr;
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
