"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { LogoMarkSmall } from "@/components/brand/LogoMarkSmall";
import { FileText } from "lucide-react";

type Scenario = "wholesale" | "reminder" | "clinic";

export default function WhatsAppSimulator() {
  const [scenario, setScenario] = useState<Scenario>("wholesale");
  const [step, setStep] = useState<number>(0);
  const [bags, setBags] = useState<number>(20);
  const [isFlowActive, setIsFlowActive] = useState<boolean>(false);

  const reset = (s: Scenario) => {
    setScenario(s);
    setStep(0);
    setBags(20);
  };

  const triggerFlow = (nextStepAction: () => void) => {
    setIsFlowActive(true);
    nextStepAction();
    setTimeout(() => setIsFlowActive(false), 800);
  };

  return (
    <Section variant="engine" className="relative overflow-hidden py-20 md:py-32">
      {/* Dark Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-60 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Context, Tabs, and Live Flow Strip */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#F6F7FB] tracking-tight leading-[1.08] font-stretch-h2">
              Try an automation.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Test how a WhatsApp bot handles customer inquiries, payments, and appointments automatically—without making your team answer the same question twenty times a day.
            </p>
          </div>

          {/* Scenario Tabs (Sentence-case, clean chips per §5) */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => reset("wholesale")}
              className={`px-4 py-2 rounded-btn text-sm font-semibold transition-all ${
                scenario === "wholesale"
                  ? "bg-kk-indigo text-white border border-kk-indigo shadow-sm"
                  : "bg-white/[0.08] text-slate-300 border border-white/10 hover:text-white hover:bg-white/[0.12]"
              }`}
            >
              Wholesale order
            </button>
            <button
              onClick={() => reset("reminder")}
              className={`px-4 py-2 rounded-btn text-sm font-semibold transition-all ${
                scenario === "reminder"
                  ? "bg-kk-indigo text-white border border-kk-indigo shadow-sm"
                  : "bg-white/[0.08] text-slate-300 border border-white/10 hover:text-white hover:bg-white/[0.12]"
              }`}
            >
              Payment reminder
            </button>
            <button
              onClick={() => reset("clinic")}
              className={`px-4 py-2 rounded-btn text-sm font-semibold transition-all ${
                scenario === "clinic"
                  ? "bg-kk-indigo text-white border border-kk-indigo shadow-sm"
                  : "bg-white/[0.08] text-slate-300 border border-white/10 hover:text-white hover:bg-white/[0.12]"
              }`}
            >
              Clinic booking
            </button>
          </div>

          {/* Live Flow Strip (§3.3: WhatsApp message → Kool automation → Tally / Sheet updated) */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-300">Under the hood</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-kk-signal font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-kk-signal animate-pulse" />
                Live Flow
              </span>
            </div>

            <div className="relative p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-2 text-center text-xs relative">
                {/* Node 1 */}
                <div className="p-2.5 rounded-lg bg-white/[0.06] border border-white/10 text-slate-200">
                  <span className="block text-[10px] text-slate-400 font-mono mb-1">01 In</span>
                  <span className="font-semibold text-xs text-white">WhatsApp message</span>
                </div>

                {/* Node 2 */}
                <div className="p-2.5 rounded-lg bg-kk-indigo/20 border border-kk-indigo/40 text-white">
                  <span className="block text-[10px] text-kk-signal font-mono mb-1">02 Process</span>
                  <span className="font-semibold text-xs text-kk-signal">Kool automation</span>
                </div>

                {/* Node 3 */}
                <div className="p-2.5 rounded-lg bg-white/[0.06] border border-white/10 text-slate-200">
                  <span className="block text-[10px] text-slate-400 font-mono mb-1">03 Out</span>
                  <span className="font-semibold text-xs text-white">Tally / Sheet updated</span>
                </div>

                {/* Travelling Signal Node Animation Connector */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-kk-signal transition-all duration-700 ${
                      isFlowActive
                        ? "w-full opacity-100 shadow-[0_0_12px_#22C3EE]"
                        : "w-1/3 opacity-40"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-4">
            <p className="text-xs text-slate-400">
              Runs 24/7 on your verified Meta WhatsApp Business number. A human can step in anytime.
            </p>
            <Button
              variant="whatsapp"
              href={getWhatsAppUrl("Hi Kulvir, I tried the WhatsApp demo and want to set this up for my business.")}
            >
              Want this for your business? Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Right Column: Phone Screen with soft indigo/cyan rim light */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            className="w-full max-w-[340px] rounded-[44px] p-1 transition-shadow duration-300"
            style={{
              boxShadow: isFlowActive
                ? "0 0 70px -10px rgba(34, 195, 238, 0.45), 0 0 35px -5px rgba(61, 53, 224, 0.45)"
                : "0 0 50px -12px rgba(61, 53, 224, 0.35), 0 0 20px -8px rgba(34, 195, 238, 0.2)",
            }}
          >
            <PhoneFrame>
              {/* WhatsApp Chat UI Header */}
              <div className="bg-[#075E54] text-white p-3 -mx-3 -mt-4 mb-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <LogoMarkSmall size={16} tone="light" />
                  </div>
                  <div>
                    <span className="font-semibold text-xs block leading-tight">
                      {scenario === "wholesale" && "Kisan Trading Co."}
                      {scenario === "reminder" && "Sharma Agro Accounts"}
                      {scenario === "clinic" && "Dr. Mehta Clinic"}
                    </span>
                    <span className="text-[10px] text-white/80 block">Verified Business Bot</span>
                  </div>
                </div>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Demo</span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 text-xs min-h-[300px] flex flex-col justify-end font-sans">
                
                {/* Wholesale Order Scenario */}
                {scenario === "wholesale" && (
                  <>
                    <div className="self-end bg-[#E7FFDB] text-ink p-2.5 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                      <p>Bhaiya, toor dal 50 kg ka rate? 20 bag chahiye.</p>
                      <span className="text-[9px] text-ink-3 text-right block mt-1">10:14 AM</span>
                    </div>

                    <div className="self-start bg-surface text-ink p-2.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm border border-line">
                      <p>Namaste! Toor dal, 50 kg bag: ₹6,250. {bags} bags in stock.</p>
                      <p className="font-bold text-ink mt-1">Total: ₹{(bags * 6250).toLocaleString("en-IN")} + GST.</p>
                      <span className="text-[9px] text-ink-3 text-right block mt-1">10:14 AM</span>
                    </div>

                    {step === 0 && (
                      <div className="pt-2 flex flex-col gap-1.5 animate-in fade-in">
                        <button
                          onClick={() => triggerFlow(() => setStep(1))}
                          className="w-full py-2 bg-white border border-[#25D366] text-[#075E54] font-semibold rounded text-xs shadow-sm hover:bg-[#E7FFDB]"
                        >
                          Confirm order ({bags} bags)
                        </button>
                        <button
                          onClick={() => triggerFlow(() => setStep(2))}
                          className="w-full py-2 bg-white border border-line text-ink-2 font-medium rounded text-xs hover:bg-bg"
                        >
                          Change quantity
                        </button>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="self-start bg-surface text-ink p-2.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm border border-line space-y-1.5 animate-in fade-in">
                        <p className="font-semibold text-leaf">Order #2041 confirmed ✅</p>
                        <p>Dispatch tomorrow by 11:00 AM.</p>
                        <div className="flex items-center gap-2 p-1.5 bg-bg rounded border border-line text-[11px]">
                          <FileText className="w-4 h-4 text-kk-indigo" />
                          <span>Bill_2041.pdf (Attached)</span>
                        </div>
                        <span className="text-[9px] text-ink-3 text-right block">10:15 AM</span>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-2 animate-in fade-in">
                        <div className="self-start bg-surface text-ink p-2 rounded-lg text-xs border border-line">
                          Sure, how many bags do you need?
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {[10, 30, 50].map((qty) => (
                            <button
                              key={qty}
                              onClick={() => triggerFlow(() => {
                                setBags(qty);
                                setStep(0);
                              })}
                              className="py-1.5 bg-white border border-line rounded text-center text-xs font-semibold hover:border-kk-indigo"
                            >
                              {qty} bags
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Payment Reminder Scenario */}
                {scenario === "reminder" && (
                  <>
                    <div className="self-start bg-surface text-ink p-2.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm border border-line space-y-1.5">
                      <p>Namaste Sharma ji. A gentle reminder: <strong>₹42,300</strong> is due on bill #1187 from 12 Sept.</p>
                      <button className="w-full py-1.5 bg-[#075E54] text-white rounded text-[11px] font-semibold">
                        Pay ₹42,300 via UPI
                      </button>
                      <span className="text-[9px] text-ink-3 text-right block">11:02 AM</span>
                    </div>

                    {step === 0 && (
                      <div className="pt-2 flex flex-col gap-1.5">
                        <button
                          onClick={() => triggerFlow(() => setStep(1))}
                          className="w-full py-2 bg-white border border-line text-ink font-semibold rounded text-xs hover:bg-bg"
                        >
                          Paid already
                        </button>
                        <button
                          onClick={() => triggerFlow(() => setStep(2))}
                          className="w-full py-2 bg-white border border-line text-ink font-semibold rounded text-xs hover:bg-bg"
                        >
                          Will pay Friday
                        </button>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="self-start bg-surface text-ink p-2 rounded-lg max-w-[85%] border border-line animate-in fade-in">
                        <p>Thank you! We'll match your transaction and send your receipt shortly.</p>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="self-start bg-surface text-ink p-2 rounded-lg max-w-[85%] border border-line animate-in fade-in">
                        <p>Noted. We will send you a quick reminder on Friday morning. Have a good week!</p>
                      </div>
                    )}
                  </>
                )}

                {/* Clinic Booking Scenario */}
                {scenario === "clinic" && (
                  <>
                    <div className="self-end bg-[#E7FFDB] text-ink p-2 rounded-lg max-w-[85%] shadow-sm">
                      <p>Can I see the doctor tomorrow evening?</p>
                    </div>

                    <div className="self-start bg-surface text-ink p-2.5 rounded-lg max-w-[85%] border border-line space-y-1">
                      <p>Yes. Tomorrow evening's free slots are 5:30, 6:00 and 7:15 pm.</p>
                    </div>

                    {step === 0 && (
                      <div className="grid grid-cols-3 gap-1 pt-1">
                        {["5:30 PM", "6:00 PM", "7:15 PM"].map((slot) => (
                          <button
                            key={slot}
                            onClick={() => triggerFlow(() => setStep(1))}
                            className="py-1.5 bg-white border border-kk-indigo text-kk-indigo font-semibold rounded text-xs hover:bg-kk-indigo-050"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 1 && (
                      <div className="self-start bg-surface text-ink p-2.5 rounded-lg border border-line space-y-1 animate-in fade-in">
                        <p className="font-semibold text-leaf">Booked for 6:00 PM with Dr. Mehta ✅</p>
                        <p className="text-[10px] text-ink-3">We'll remind you 2 hours before. Reply 1 to reschedule.</p>
                      </div>
                    )}
                  </>
                )}

              </div>

              {/* Sample indicator */}
              <div className="pt-2 text-center text-[10px] text-ink-3 border-t border-line mt-3">
                Demo with sample data
              </div>
            </PhoneFrame>
          </div>
        </div>

      </div>
    </Section>
  );
}
