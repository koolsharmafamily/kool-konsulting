"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Clock, IndianRupee } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(4);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [monthlyWage, setMonthlyWage] = useState(25000);

  // Calculations
  const totalHoursWastedMonth = Math.round(teamSize * hoursPerWeek * 4.33);
  const hourlyRate = monthlyWage / 180;
  const annualCostWasted = Math.round(totalHoursWastedMonth * hourlyRate * 12);
  const annualSavedWithAI = Math.round(annualCostWasted * 0.78);
  const hoursFreedPerMonth = Math.round(totalHoursWastedMonth * 0.78);

  const formatLakhs = (val: number) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <section className="py-24 bg-obsidian-light border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Calculate your <span className="text-amber-500">invisible costs.</span>
              </h2>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                When your team spends half their day copying data into registers and re-entering GST bills into Tally, you are paying full salaries for mechanical work that software can do in seconds.
              </p>
              
              <div className="mt-8 space-y-4 font-mono text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-500">Manual Admin Eliminated</span>
                  <span className="text-emerald-400 font-bold">75% - 90%</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-500">Average ROI Payback</span>
                  <span className="text-amber-400 font-bold">&lt; 45 Days</span>
                </div>
                <div className="flex items-center justify-between pb-4">
                  <span className="text-slate-500">Recurring License Fees</span>
                  <span className="text-white font-bold">Zero (You own it)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="surface-card p-8 rounded-2xl">
                <div className="space-y-8">
                  
                  {/* Sliders */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300 font-medium">Team members doing repetitive data entry:</span>
                        <span className="font-mono text-amber-400 bg-amber-950/30 px-3 py-1 rounded-md border border-amber-500/20">{teamSize}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={teamSize}
                        onChange={(e) => setTeamSize(Number(e.target.value))}
                        className="w-full h-1.5 bg-obsidian rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300 font-medium">Hours spent per person weekly:</span>
                        <span className="font-mono text-amber-400 bg-amber-950/30 px-3 py-1 rounded-md border border-amber-500/20">{hoursPerWeek} hrs</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="35"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                        className="w-full h-1.5 bg-obsidian rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300 font-medium">Average monthly salary:</span>
                        <span className="font-mono text-amber-400 bg-amber-950/30 px-3 py-1 rounded-md border border-amber-500/20">₹{monthlyWage.toLocaleString("en-IN")}</span>
                      </div>
                      <input
                        type="range"
                        min="12000"
                        max="60000"
                        step="1000"
                        value={monthlyWage}
                        onChange={(e) => setMonthlyWage(Number(e.target.value))}
                        className="w-full h-1.5 bg-obsidian rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-6 rounded-xl bg-obsidian border border-white/5 grid grid-cols-2 gap-6">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                        Time Given Back
                      </span>
                      <motion.div
                        key={hoursFreedPerMonth}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-heading font-extrabold text-white flex items-center gap-2"
                      >
                        <Clock className="w-5 h-5 text-amber-500" />
                        <span>{hoursFreedPerMonth} <span className="text-lg text-slate-400">hrs/mo</span></span>
                      </motion.div>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                        Wasted Salary Saved
                      </span>
                      <motion.div
                        key={annualSavedWithAI}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-heading font-extrabold text-emerald-400 flex items-center gap-2"
                      >
                        <IndianRupee className="w-5 h-5" />
                        <span>{formatLakhs(annualSavedWithAI)} <span className="text-lg text-emerald-600">/yr</span></span>
                      </motion.div>
                    </div>
                  </div>

                  <Link
                    href={`/contact?bottleneck=Save%20${hoursFreedPerMonth}%20hours%20per%20month`}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-lg bg-white hover:bg-slate-100 transition-colors text-obsidian font-heading font-bold"
                  >
                    <span>Claim your automation blueprint</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
