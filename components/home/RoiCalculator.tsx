"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      return `₹${(val / 100000).toFixed(2)}L`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <section className="py-24 bg-black border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/15">
          
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/15 flex flex-col justify-between">
            <ScrollReveal direction="left">
              <h2 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                [ Value Projection ]
              </h2>
              <h3 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tighter leading-tight mb-6">
                Calculate the cost of manual operations.
              </h3>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed mb-12">
                When your team spends half their day copying data into registers and re-entering GST bills into Tally, you are paying full salaries for mechanical work that scripts can do in seconds.
              </p>
              
              <div className="space-y-0 font-mono text-xs border border-white/15 bg-[#050505]">
                <div className="flex items-center justify-between p-4 border-b border-white/15">
                  <span className="text-neutral-500">Admin Eliminated</span>
                  <span className="text-white font-bold">75% - 90%</span>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-white/15">
                  <span className="text-neutral-500">ROI Payback Period</span>
                  <span className="text-white font-bold">&lt; 45 Days</span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="text-neutral-500">Recurring SaaS Fees</span>
                  <span className="text-terminal-green font-bold">ZERO (You own it)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="p-8 md:p-12 bg-[#050505]">
            <ScrollReveal direction="right">
              <div className="space-y-8">
                
                {/* Sliders */}
                <div className="space-y-8 font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Team Size (Data Entry)</span>
                      <span className="text-white font-bold bg-white/10 px-2 py-1 border border-white/20">{teamSize}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Hours/Week Per Person</span>
                      <span className="text-white font-bold bg-white/10 px-2 py-1 border border-white/20">{hoursPerWeek} hrs</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="35"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-white"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Avg Monthly Salary</span>
                      <span className="text-white font-bold bg-white/10 px-2 py-1 border border-white/20">₹{monthlyWage.toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min="12000"
                      max="60000"
                      step="1000"
                      value={monthlyWage}
                      onChange={(e) => setMonthlyWage(Number(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-white"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="p-6 border border-white/15 bg-black grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                      Time Reclaimed
                    </span>
                    <motion.div
                      key={hoursFreedPerMonth}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-3xl font-sans font-bold text-white"
                    >
                      {hoursFreedPerMonth} <span className="text-sm font-mono text-neutral-500">hrs/mo</span>
                    </motion.div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">
                      Capital Saved
                    </span>
                    <motion.div
                      key={annualSavedWithAI}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-3xl font-sans font-bold text-terminal-green"
                    >
                      {formatLakhs(annualSavedWithAI)} <span className="text-sm font-mono text-terminal-dim">/yr</span>
                    </motion.div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?bottleneck=Save%20${hoursFreedPerMonth}%20hours%20per%20month`}
                    className="w-full brutalist-button px-6 py-4 flex items-center justify-center text-sm"
                  >
                    Deploy Blueprint
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
