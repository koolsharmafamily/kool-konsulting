"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const STEPS = [
  {
    id: "01",
    title: "Opportunity Audit",
    desc: "A 30-min deep dive. We map exact processes where manual labor is leaking revenue.",
  },
  {
    id: "02",
    title: "2-Week Deployment",
    desc: "No pitch decks. We engineer and deploy a functional automation architecture into your live operations.",
  },
  {
    id: "03",
    title: "Handover & Hand-off",
    desc: "You own 100% of the IP. We train your staff and provide 60 days of priority operational support.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-black border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
              [ Standard Operating Procedure ]
            </h2>
            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter">
              Deployment Architecture.
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/15">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={`p-8 md:p-12 h-full flex flex-col justify-between ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-white/15' : ''}`}>
                <div className="text-3xl font-mono text-neutral-600 font-bold mb-12">
                  {step.id}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-xl text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm font-mono text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
