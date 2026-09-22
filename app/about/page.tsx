import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Code2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Kulvir Sharma | Kool Konsulting Nagpur",
  description:
    "Run by Kulvir Sharma. University of Melbourne Finance grad turned Tech Architect. Bringing Tier-1 financial modelling, AI automation, and software execution to Central India businesses.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-[#141416] border border-zinc-800 p-3 shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src="/kulvir-sharma.webp"
                  alt="Kulvir Sharma, founder and tech architect of Kool Konsulting"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-bold text-lg text-white">Kulvir Sharma</h3>
                <p className="text-xs font-mono text-zinc-400">Founder & Tech Architect</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new projects
                </div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Founder & Architect
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              You Don’t Deal with an Account Manager. You Deal Directly with{" "}
              <span className="text-purple-400">The Architect.</span>
            </h1>

            {/* Core Quote */}
            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-2">
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
                &ldquo;Run by <strong className="text-white">Kulvir Sharma</strong>. University of Melbourne Finance grad turned Tech Architect. I learned how global advisory firms automate the world&apos;s largest companies. Now, I&apos;m bringing that enterprise-grade execution to businesses in Central India. You don&apos;t deal with an account manager; you deal directly with the architect.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Most software agencies in India fail because of a communication gap: the business owner talks to a non-technical sales rep, who translates it to a project manager, who outsources it to a junior coder who doesn&apos;t know what gross profit margin means.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              At Kool Konsulting, we bridge finance, strategy, and modern software engineering. We understand balance sheets, working capital cycles, and Indian GST rules as deeply as we understand Python, WhatsApp APIs, and Next.js.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950/40"
              >
                Book a 20-Min Call with Kulvir
              </Link>

              <a
                href="https://wa.me/918888821351?text=Hi%20Kulvir,%20I'd%20like%20to%20talk%20about%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 hover:text-emerald-400 bg-zinc-900 border border-zinc-800 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+91 88888 21351)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Background & Credentials
            </h2>
            <p className="text-sm text-zinc-400">
              Rigorous corporate finance education combined with practical engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">2022 – 2026</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Bachelor of Commerce (Finance & Management)
              </h3>
              <div className="text-xs font-mono text-purple-300">The University of Melbourne, Australia</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Trained in financial econometrics, operational capital planning, and corporate strategy at Australia&apos;s leading commerce institution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-500/30">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Professional Experience</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                M&A and Corporate Advisory
              </h3>
              <div className="text-xs font-mono text-purple-300">Financial Modelling & Valuations</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Conducted valuations, business plans, and due-diligence data rooms for acquisitions. Knows what banks and investors look for in financial figures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-500/30">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Digital Systems</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Digital Systems & Marketing Architecture
              </h3>
              <div className="text-xs font-mono text-purple-300">SSCBS, University of Delhi</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Specialized in search algorithms, local digital presence, and high-conversion client acquisition funnels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Founder & Operator</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Founder & Tech Architect
              </h3>
              <div className="text-xs font-mono text-purple-300">Kool Konsulting, Nagpur</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Personally builds and deploys production AI workflows, Tally automations, and custom dashboards for Central India businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Guarantees */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Our 4 Promises to You
          </h2>
          <p className="text-sm text-zinc-400">
            How we protect your business, your data, and your money.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "You Own Everything",
              desc: "Every line of software code, database, and marketing profile belongs to you. Zero vendor lock-in.",
            },
            {
              title: "Fixed Price Quotes",
              desc: "No open-ended hourly billing or runaway costs. We define the scope, give you a fixed quote, and stick to it.",
            },
            {
              title: "Fast Delivery",
              desc: "Most automation systems and marketing setups are delivered within 10 to 14 business days.",
            },
            {
              title: "Direct Access",
              desc: "You have direct access to Kulvir via phone and WhatsApp throughout the project and afterwards.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141416] border border-zinc-800 space-y-2"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono font-bold flex items-center justify-center text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
