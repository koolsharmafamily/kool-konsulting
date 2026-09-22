"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Sparkles, ArrowRight, ShieldCheck, Clock, IndianRupee } from "lucide-react";

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
    <section className="py-20 bg-[#09090B] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clear Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-purple-400" />
              Interactive Savings Estimator
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              How Much Time & Money Is Manual Busywork Costing You?
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              When your team spends half their day copying data into registers, answering the same phone questions, and re-entering GST bills into Tally, you are paying full salaries for mechanical work that software can do in seconds.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-sm">
              <div className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 space-y-1">
                <span className="text-xs text-zinc-500 uppercase">Workload Reduced</span>
                <div className="text-2xl font-bold text-white">75% - 90%</div>
                <p className="text-xs text-zinc-400">manual admin eliminated</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 space-y-1">
                <span className="text-xs text-zinc-500 uppercase">Average Payback</span>
                <div className="text-2xl font-bold text-emerald-400">&lt; 45 Days</div>
                <p className="text-xs text-zinc-400">pays for itself fast</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Zero recurring monthly software license fees. You own the system outright.</span>
            </div>
          </div>

          {/* Right Column: Interactive Sliders */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#141416] border border-zinc-800 p-6 sm:p-8 shadow-xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="font-heading font-bold text-lg text-white">
                  Estimate Your Savings
                </h3>
                <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                  Adjust Sliders Below
                </span>
              </div>

              {/* Slider 1: Team Members */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-300 font-medium">Office staff doing repetitive data entry / bills:</span>
                  <span className="font-mono text-white font-bold text-sm bg-zinc-900 px-3 py-1 rounded border border-zinc-700">
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>1 person</span>
                  <span>10 people</span>
                  <span>20 people</span>
                </div>
              </div>

              {/* Slider 2: Hours Per Week */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-300 font-medium">Hours spent per person weekly on manual paperwork:</span>
                  <span className="font-mono text-white font-bold text-sm bg-zinc-900 px-3 py-1 rounded border border-zinc-700">
                    {hoursPerWeek} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>2 hrs</span>
                  <span>18 hrs</span>
                  <span>35 hrs</span>
                </div>
              </div>

              {/* Slider 3: Monthly Salary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-300 font-medium">Average monthly salary per staff member:</span>
                  <span className="font-mono text-white font-bold text-sm bg-zinc-900 px-3 py-1 rounded border border-zinc-700">
                    ₹{monthlyWage.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="12000"
                  max="60000"
                  step="1000"
                  value={monthlyWage}
                  onChange={(e) => setMonthlyWage(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>₹12,000</span>
                  <span>₹35,000</span>
                  <span>₹60,000</span>
                </div>
              </div>

              {/* Results Breakdown */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-1">
                      Time Given Back
                    </span>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center gap-1.5">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span>{hoursFreedPerMonth} hrs</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono">saved every month</span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-1">
                      Wasted Salary Saved
                    </span>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400 flex items-center gap-1">
                      <IndianRupee className="w-5 h-5" />
                      <span>{formatLakhs(annualSavedWithAI)}</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 font-mono">recovered each year</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/contact?bottleneck=Save%20${hoursFreedPerMonth}%20hours%20per%20month%20for%20${teamSize}%20team%20members`}
                className="w-full py-4 rounded-xl text-center font-heading font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Your Free Automation Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
