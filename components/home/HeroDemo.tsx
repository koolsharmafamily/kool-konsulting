"use client";

import React, { useState, useEffect } from "react";
import { Send, Zap, Database, CheckCircle2, Clock } from "lucide-react";

export default function HeroDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "WhatsApp Inquiry",
      source: "Inbound",
      time: "10:42 AM",
      badge: "Customer Chat",
      content: '"Bhaiya, please send rate and quote for 40 tonnes 12mm TMT steel urgently."',
      result: "Reading items...",
    },
    {
      title: "AI Validation",
      source: "Automated System",
      time: "10:42 AM",
      badge: "Instant Verification",
      content: "Extracted: [12mm TMT Steel] [40 Tonnes]. Stock: Available. Credit: Approved.",
      result: "Verified in 0.8s",
    },
    {
      title: "Tally Entry & PDF",
      source: "Tally Prime + API",
      time: "10:42 AM",
      badge: "Completed",
      content: "Created Sales Entry #KK-8924. Branded PDF quote delivered back on WhatsApp.",
      result: "Done in 3.8s",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full rounded-2xl bg-surface border border-white/10 shadow-2xl overflow-hidden p-6 relative">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] pointer-events-none rounded-full" />
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-700" />
            <span className="w-3 h-3 rounded-full bg-slate-700" />
            <span className="w-3 h-3 rounded-full bg-slate-700" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            Live Runbook
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            3.8s Turnaround
          </span>
        </div>
      </div>

      {/* 3 Step Flow */}
      <div className="flex flex-col gap-3 mt-5 relative z-10">
        {steps.map((step, idx) => {
          const isCurrent = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border ${
                isCurrent
                  ? "bg-obsidian border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.1)] scale-[1.02]"
                  : "bg-obsidian/40 border-white/5 opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-heading font-semibold text-sm text-white flex items-center gap-2">
                  {idx === 0 && <Send className="w-4 h-4 text-slate-400" />}
                  {idx === 1 && <Zap className="w-4 h-4 text-amber-500" />}
                  {idx === 2 && <Database className="w-4 h-4 text-blue-400" />}
                  {step.title}
                </h4>
                <span
                  className={`text-[9px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isCurrent
                      ? "bg-amber-950/40 text-amber-400 border border-amber-500/30"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {step.badge}
                </span>
              </div>

              <div className="text-[13px] text-slate-300 leading-relaxed font-mono">
                {step.content}
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-500">{step.time}</span>
                <span className={isCurrent ? "text-emerald-400 font-semibold flex items-center gap-1" : "text-slate-500"}>
                  {isCurrent && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  {step.result}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
