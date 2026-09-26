"use client";

import React, { useState, useEffect } from "react";

export default function HeroDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-black border border-white/15 relative overflow-hidden flex flex-col font-mono text-xs text-neutral-400">
      
      {/* Top Bar */}
      <div className="bg-[#111] border-b border-white/15 px-4 py-2 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/20" />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-neutral-500">
          SYSTEM_LOG_STREAM
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        {/* Step 0: Awaiting */}
        <div className="flex flex-col gap-1">
          <span className="text-white">&gt; Status: Listening on Port 8080...</span>
        </div>

        {/* Step 1: WhatsApp Inbound */}
        <div className={`transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
          <div className="border border-white/10 bg-[#0A0A0A] p-3 w-full sm:w-4/5">
            <div className="text-[9px] text-neutral-500 mb-2 flex justify-between">
              <span>INBOUND: WhatsApp API</span>
              <span>14:32:01</span>
            </div>
            <div className="text-neutral-200 font-sans text-sm">
              "Kulvir, we need 50 bags of Ultratech cement sent to the Besa site urgently."
            </div>
          </div>
        </div>

        {/* Step 2: Processing */}
        <div className={`transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
          <span className="text-neutral-500">&gt; Engine: Extracting entities...</span>
          <br/>
          <span className="text-terminal-dim">
            <span className="text-terminal-green">{"{"}</span>
            <br/>
            &nbsp;&nbsp;"item": "Ultratech Cement",<br/>
            &nbsp;&nbsp;"qty": 50,<br/>
            &nbsp;&nbsp;"location": "Besa Site",<br/>
            &nbsp;&nbsp;"intent": "urgent_dispatch"<br/>
            <span className="text-terminal-green">{"}"}</span>
          </span>
        </div>

        {/* Step 3: Action */}
        <div className={`transition-opacity duration-300 ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
          <span className="text-neutral-500">&gt; Action: Triggering Tally Prime ERP API...</span>
          <br/>
          <div className="inline-flex items-center gap-2 bg-[#002200] text-terminal-green border border-terminal-green/30 px-2 py-1 mt-2">
            <span className="w-1.5 h-1.5 bg-terminal-green animate-blink"></span>
            SUCCESS: Sales Order #8992 Generated in 1.2s
          </div>
        </div>
      </div>
    </div>
  );
}
