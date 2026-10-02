import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

const steps = [
  {
    num: "1",
    title: "Free tech check-up",
    desc: "30 minutes on a call, a video call, or at your office in Nagpur. We look at how you work today and tell you the first thing worth fixing. If a ready-made app already does the job, we'll say so.",
  },
  {
    num: "2",
    title: "Written plan and fixed quote",
    desc: "Scope, timeline, price and payment milestones in writing. You know the exact cost before work begins. Zero hourly billing or hidden extras.",
  },
  {
    num: "3",
    title: "Build, with a demo every week",
    desc: "You test the app or website on your own phone as it is built. You see actual screens and give feedback so we can adjust early.",
  },
  {
    num: "4",
    title: "Launch and training",
    desc: "We personally walk through the software with your counter, factory, or site team in Hindi, Marathi or English, and stay close during the first weeks.",
  },
  {
    num: "5",
    title: "Support that continues",
    desc: "A care plan for hosting, backups, and adjustments, or a full handover. The code, database, domain, and accounts are 100% in your name.",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" variant="surface">
      <SectionHeading
        h2="How a project runs"
        lead="Clear commitments, milestone payments, and no agency runaround."
      />

      {/* 5-step sequence */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className="p-6 rounded-card bg-paper border border-line flex flex-col justify-between space-y-4 hover:border-line-strong transition-all"
          >
            <div className="space-y-3">
              <span className="w-9 h-9 rounded-full bg-carbon-050 text-carbon font-display font-bold flex items-center justify-center text-sm border border-[#DCD9F5]">
                {st.num}
              </span>
              <h3 className="font-display font-bold text-lg text-ink leading-snug font-stretch-h3">
                {st.title}
              </h3>
              <p className="text-xs text-ink-2 leading-relaxed">
                {st.desc}
              </p>
            </div>
            <div className="pt-2 text-[10px] text-ink-3 uppercase tracking-wider font-semibold">
              Step 0{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
