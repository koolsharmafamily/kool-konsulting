"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Search, Code2, Users } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Opportunity Audit",
    desc: "We analyze your operations on a 30-min call. We pinpoint exact areas where automation or marketing can drive immediate ROI.",
  },
  {
    number: "02",
    icon: Code2,
    title: "2-Week Pilot Build",
    desc: "We don't build presentation decks. We build a functional, working system deployed into your actual business environment.",
  },
  {
    number: "03",
    icon: Users,
    title: "Handover & Support",
    desc: "Your team is trained. You own 100% of the code and intellectual property. We provide 60 days of priority support.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-slate-400 text-lg">
              A transparent, sprint-based approach designed to deliver working systems fast.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.15}>
                  <div className="relative flex flex-col items-center text-center space-y-6 group">
                    {/* Icon Circle */}
                    <div className="w-24 h-24 rounded-full bg-surface border-2 border-white/10 group-hover:border-amber-500/50 flex items-center justify-center relative z-10 transition-colors shadow-lg">
                      <Icon className="w-8 h-8 text-amber-500" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-amber-500 text-obsidian font-bold text-sm flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Text */}
                    <div className="space-y-3 px-4">
                      <h3 className="font-heading font-bold text-xl text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
