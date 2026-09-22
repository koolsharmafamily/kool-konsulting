"use client";

import React, { useState, useEffect } from "react";
import { Send, Zap, Database, CheckCircle2, Clock, FileText } from "lucide-react";

export default function HeroDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Raw Customer Inquiry on WhatsApp",
      source: "WhatsApp Message Inbound",
      time: "10:42 AM",
      badge: "Customer Chat",
      content:
        '"Bhaiya, please send rate and quote for 40 tonnes 12mm TMT steel for our MIDC Hingna site urgently."',
      result: "Received instantly · Reading items...",
    },
    {
      title: "2. Autonomous Verification & Stock Check",
      source: "Automated System",
      time: "10:42 AM",
      badge: "Instant Verification",
      content:
        "Extracted: [Product: 12mm TMT Steel] · [Qty: 40 Tonnes] · [Rate: ₹52,400/t] · [Stock: Available at Wadi godown] · [Credit Check: Approved].",
      result: "Verified in 0.8 seconds",
    },
    {
      title: "3. Direct Tally Voucher & PDF Delivery",
      source: "Tally Prime & WhatsApp API",
      time: "10:42 AM",
      badge: "Completed Automatically",
      content:
        "Created formal GST Quotation #KK-8924. Posted draft sales entry in Tally Prime. Branded PDF quote delivered back to customer on WhatsApp.",
      result: "Done in 3.8s · Zero manual work",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full rounded-2xl bg-[#141416] border border-zinc-800 shadow-2xl overflow-hidden p-5 sm:p-7">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Live Automation Workflow · WhatsApp + Tally Prime
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Turnaround: 3.8 Seconds
          </span>
        </div>
      </div>

      {/* 3 Step Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
        {steps.map((step, idx) => {
          const isCurrent = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-xl p-4 transition-all border ${
                isCurrent
                  ? "bg-zinc-900 border-purple-500/60 shadow-lg shadow-purple-950/30 scale-[1.01]"
                  : "bg-zinc-900/50 border-zinc-800/80 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {step.source}
                </span>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    isCurrent
                      ? "bg-purple-950 text-purple-300 border border-purple-500/40"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {step.badge}
                </span>
              </div>

              <h4 className="font-heading font-semibold text-sm text-white mb-2 flex items-center gap-1.5">
                {idx === 0 && <Send className="w-4 h-4 text-emerald-400" />}
                {idx === 1 && <Zap className="w-4 h-4 text-purple-400" />}
                {idx === 2 && <Database className="w-4 h-4 text-blue-400" />}
                {step.title}
              </h4>

              <div className="text-xs text-zinc-300 font-mono bg-black/50 p-3 rounded-lg border border-zinc-800/60 leading-relaxed min-h-[70px]">
                {step.content}
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500">{step.time}</span>
                <span className={isCurrent ? "text-emerald-400 font-semibold flex items-center gap-1" : "text-zinc-500"}>
                  {isCurrent && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  {step.result}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="bg-zinc-900/80 rounded-xl p-3.5 border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-4 text-zinc-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Time per quote: <strong className="text-white">3.8 seconds</strong> (vs. 45 min manual)</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline text-emerald-400">Zero data entry errors</span>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Active in Nagpur businesses</span>
        </div>
      </div>
    </div>
  );
}
