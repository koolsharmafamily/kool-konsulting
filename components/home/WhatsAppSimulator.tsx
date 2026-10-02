"use client";

import React, { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, CheckCheck, FileText } from "lucide-react";

type Scenario = "wholesale" | "reminder" | "clinic";

export default function WhatsAppSimulator() {
  const [scenario, setScenario] = useState<Scenario>("wholesale");
  const [step, setStep] = useState<number>(0);
  const [bags, setBags] = useState<number>(20);

  const reset = (s: Scenario) => {
    setScenario(s);
    setStep(0);
    setBags(20);
  };

  return (
    <Section variant="carbon-050">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Context & Explanations */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-white px-3 py-1 rounded-full border border-[#DCD9F5]">
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink tracking-tight leading-[1.08] font-stretch-h2">
            Try an automation.
          </h2>
          <p className="text-lg text-ink-2 leading-relaxed">
            Test how a WhatsApp bot handles customer inquiries, payments, and appointments automatically—without making your team answer the same question twenty times a day.
          </p>

          {/* Scenario Tabs */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-semibold text-ink-3 uppercase tracking-wider block">
              Choose an everyday scenario:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => reset("wholesale")}
                className={`px-4 py-2 rounded-btn text-sm font-semibold transition-all ${
                  scenario === "wholesale"
                    ? "bg-carbon text-paper shadow-sm"
                    : "bg-surface text-ink-2 border border-line hover:text-ink"
                }`}
              >
                1. Wholesale order
              </button>
              <button
                onClick={() => reset("reminder")}
                className={`px-4 py-2 rounded-btn text-sm font-semibold transition-all ${
                  scenario === "reminder"
                    ? "bg-carbon text-paper shadow-sm"
                    : "bg-surface text-ink-2 border border-line hover:text-ink"
                }`}
              >
                2. Payment reminder
              </button>
              <button
                onClick={() => reset("clinic")}
                className={`px-4 py-2 rounded-btn text-sm font-semibold transition-all ${
                  scenario === "clinic"
                    ? "bg-carbon text-paper shadow-sm"
                    : "bg-surface text-ink-2 border border-line hover:text-ink"
                }`}
              >
                3. Clinic booking
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-[#DCD9F5] space-y-3">
            <p className="text-xs text-ink-3">
              Runs 24/7 on your verified Meta WhatsApp Business number. A human can step in anytime.
            </p>
            <Button
              variant="whatsapp"
              href={getWhatsAppUrl("Hi Kulvir, I tried the WhatsApp demo and want to set this up for my business.")}
              icon={<MessageSquare className="w-5 h-5" />}
            >
              Want this for your business? Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Right Column: Phone Screen with Interactive Script */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[340px]">
            <PhoneFrame>
              {/* WhatsApp Chat UI Header */}
              <div className="bg-[#075E54] text-white p-3 -mx-3 -mt-4 mb-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-surface/20 flex items-center justify-center font-bold text-xs">
                    KK
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
              <div className="space-y-3 text-xs min-h-[300px] flex flex-col justify-end">
                
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
                          onClick={() => setStep(1)}
                          className="w-full py-2 bg-white border border-[#25D366] text-[#075E54] font-semibold rounded text-xs shadow-sm hover:bg-[#E7FFDB]"
                        >
                          Confirm order ({bags} bags)
                        </button>
                        <button
                          onClick={() => setStep(2)}
                          className="w-full py-2 bg-white border border-line text-ink-2 font-medium rounded text-xs hover:bg-paper"
                        >
                          Change quantity
                        </button>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="self-start bg-surface text-ink p-2.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm border border-line space-y-1.5 animate-in fade-in">
                        <p className="font-semibold text-leaf">Order #2041 confirmed ✅</p>
                        <p>Dispatch tomorrow by 11:00 AM.</p>
                        <div className="flex items-center gap-2 p-1.5 bg-paper rounded border border-line text-[11px]">
                          <FileText className="w-4 h-4 text-carbon" />
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
                              onClick={() => {
                                setBags(qty);
                                setStep(0);
                              }}
                              className="py-1.5 bg-white border border-line rounded text-center text-xs font-semibold hover:border-carbon"
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
                          onClick={() => setStep(1)}
                          className="w-full py-2 bg-white border border-line text-ink font-semibold rounded text-xs hover:bg-paper"
                        >
                          Paid already
                        </button>
                        <button
                          onClick={() => setStep(2)}
                          className="w-full py-2 bg-white border border-line text-ink font-semibold rounded text-xs hover:bg-paper"
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
                            onClick={() => setStep(1)}
                            className="py-1.5 bg-white border border-carbon text-carbon font-semibold rounded text-xs hover:bg-carbon-050"
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
