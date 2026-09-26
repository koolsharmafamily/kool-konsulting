import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  LineChart,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Kulvir Sharma | Kool Konsulting",
  description:
    "Founder of Kool Konsulting. Tech Architect, University of Melbourne Alumni, bringing Tier-1 corporate systems to MSMEs in Central India.",
};

const TIMELINE = [
  {
    year: "2018 - 2020",
    title: "University of Melbourne",
    desc: "Master of Management (Finance) & Bachelor of Commerce. Trained in rigorous financial modeling and Tier-1 corporate strategy in Australia.",
    icon: GraduationCap
  },
  {
    year: "2020 - 2022",
    title: "Corporate Advisory & M&A",
    desc: "Built complex financial models, handled mergers, and analyzed business bottlenecks for large enterprises, seeing exactly where cash gets trapped in operations.",
    icon: LineChart
  },
  {
    year: "2022 - Present",
    title: "Full-Stack Software Engineering",
    desc: "Mastered modern cloud architecture, AI APIs, React/Next.js, and backend automation to execute the strategies practically.",
    icon: Code2
  },
  {
    year: "Today",
    title: "Kool Konsulting Nagpur",
    desc: "Combining financial discipline with custom engineering to help MSMEs in Central India grow without scaling their manual headcount.",
    icon: Briefcase
  }
];

const PRINCIPLES = [
  {
    title: "We only sell ROI.",
    desc: "If we can't save you more money in time than what you pay us, we won't take the project. Simple as that."
  },
  {
    title: "You own the system.",
    desc: "No sneaky 'per seat' monthly licenses. We charge a one-time build fee, and the intellectual property is 100% yours forever."
  },
  {
    title: "No PowerPoint consultants.",
    desc: "We don't hand you a deck of 'recommendations' and walk away. We build the actual code, deploy it, and train your staff."
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* HERO SECTION */}
        <section className="pt-12 pb-24 border-b border-white/5">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
              
              {/* Photo */}
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-surface aspect-[4/5] sm:aspect-square lg:aspect-[3/4] max-w-md mx-auto lg:mx-0">
                  <img
                    src="/kulvir-sharma.webp"
                    alt="Kulvir Sharma - Founder"
                    className="object-cover object-top w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white/80 text-sm font-mono bg-obsidian/40 backdrop-blur-md w-fit px-3 py-1.5 rounded-lg border border-white/10">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      Nagpur, Maharashtra
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/30 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
                  Tech Architect & Founder
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                  Kulvir Sharma
                </h1>
                
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  <p>
                    I built Kool Konsulting because I saw a massive gap in how business is done in Central India.
                  </p>
                  <p>
                    Manufacturers, distributors, and clinic owners in Nagpur are running ₹5 Cr+ businesses using systems from 2005. They are buried in WhatsApp messages, manual Tally data entry, and lost physical muster sheets.
                  </p>
                  <p>
                    Most "IT agencies" just build brochure websites. Traditional consultants just make slideshows.
                  </p>
                  <p className="text-white font-medium border-l-2 border-amber-500/50 pl-4">
                    I bring Tier-1 corporate financial rigor and modern full-stack software engineering directly into your operations, building custom automation that buys back your time.
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-heading font-bold text-obsidian bg-amber-500 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                  >
                    <span>Book a Call with Kulvir</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </section>

        {/* TIMELINE SECTION */}
        <section className="py-24 border-b border-white/5">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-extrabold text-white">
                The Architecture of the Firm
              </h2>
              <p className="mt-4 text-slate-400">
                A rare combination of rigorous financial training and elite software engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIMELINE.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="surface-card p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-24 h-24 text-amber-500" />
                    </div>
                    
                    <div className="flex flex-col h-full relative z-10">
                      <div className="text-xs font-mono text-amber-500 mb-4 bg-amber-950/20 w-fit px-2 py-1 rounded border border-amber-500/10">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mt-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </section>

        {/* WORKING PRINCIPLES */}
        <section className="py-24">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-heading font-extrabold text-white sticky top-24">
                  Our Non-Negotiable Principles.
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6">
                {PRINCIPLES.map((prin, idx) => (
                  <div key={idx} className="bg-obsidian-light p-8 rounded-2xl border border-white/5 flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white mb-2">
                        {prin.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {prin.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </div>
  );
}
