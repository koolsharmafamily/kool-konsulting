import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Activity, AlertTriangle, Lightbulb } from "lucide-react";
import { getCaseStudy, caseStudies } from "@/data/caseStudies";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      
      {/* 1. Header Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Deployments</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-terminal-green uppercase tracking-widest border border-terminal-green/30 px-3 py-1 bg-terminal-green/10">
                  {caseStudy.caseNumber}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border border-white/15 px-3 py-1 bg-white/5">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-white tracking-tighter leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-mono max-w-2xl">
                {caseStudy.subtitle}
              </p>
            </div>
            
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 border border-white/15 bg-[#050505] space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-neutral-500 uppercase">Role</span>
                  <span className="text-white text-right">{caseStudy.role}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-neutral-500 uppercase">Status</span>
                  <span className="text-white text-right">{caseStudy.status}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-neutral-500 uppercase">Timeframe</span>
                  <span className="text-white text-right">{caseStudy.timeframe}</span>
                </div>
                <div className="pt-2">
                  <span className="text-neutral-500 uppercase block mb-2">Stack / Tools</span>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-neutral-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive SCR Summary (If present) */}
      {caseStudy.scr && (
        <section className="py-16 border-b border-white/15 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-8">
              Executive Brief (SCR)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/15 bg-black">
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/15 space-y-4">
                <span className="text-xs font-mono text-terminal-green uppercase tracking-widest">Situation</span>
                <p className="text-sm font-sans text-neutral-300 leading-relaxed">{caseStudy.scr.situation}</p>
              </div>
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/15 space-y-4">
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">Complication</span>
                <p className="text-sm font-sans text-neutral-300 leading-relaxed">{caseStudy.scr.complication}</p>
              </div>
              <div className="p-8 space-y-4">
                <span className="text-xs font-mono text-white uppercase tracking-widest">Resolution</span>
                <p className="text-sm font-sans text-neutral-300 leading-relaxed">{caseStudy.scr.resolution}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Deep Dive Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Context, Problem, Approach */}
            <div className="lg:col-span-8 space-y-16">
              
              <div className="space-y-6">
                <h2 className="text-2xl font-sans font-bold text-white flex items-center gap-3">
                  <span className="text-terminal-green font-mono text-sm">01</span> Context
                </h2>
                <div className="space-y-4">
                  {caseStudy.context.map((p, i) => (
                    <p key={i} className="text-sm md:text-base text-neutral-400 leading-relaxed font-mono">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-sans font-bold text-white flex items-center gap-3">
                  <span className="text-terminal-green font-mono text-sm">02</span> The Core Problem
                </h2>
                <div className="p-6 border border-white/15 bg-[#050505] space-y-4">
                  {caseStudy.problem.map((p, i) => (
                    <p key={i} className="text-sm md:text-base text-neutral-300 leading-relaxed font-mono">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {caseStudy.approach && caseStudy.approach.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-sans font-bold text-white flex items-center gap-3">
                    <span className="text-terminal-green font-mono text-sm">03</span> Architecture & Approach
                  </h2>
                  <div className="space-y-8">
                    {caseStudy.approach.map((item, i) => (
                      <div key={i} className="space-y-2">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-mono">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.solution && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-sans font-bold text-white flex items-center gap-3">
                    <span className="text-terminal-green font-mono text-sm">04</span> Implementation
                  </h2>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-mono">
                    {caseStudy.solution.intro}
                  </p>
                  
                  {caseStudy.solution.highlights && (
                    <div className="pt-4 space-y-3">
                      {caseStudy.solution.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-[#050505] border border-white/15">
                          <Check className="w-5 h-5 text-terminal-green shrink-0 mt-0.5" />
                          <p className="text-sm text-neutral-300 font-mono leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Right Column: Outcomes, Risks, Lessons */}
            <div className="lg:col-span-4 space-y-12">
              
              {caseStudy.outcome && (
                <div className="p-8 border border-terminal-green/30 bg-terminal-green/5 space-y-6">
                  <div className="flex items-center gap-3 text-terminal-green">
                    <Activity className="w-5 h-5" />
                    <h3 className="text-sm font-mono uppercase tracking-widest font-bold">
                      {caseStudy.outcome.kind === 'measured' ? 'Measured Results' : 'Expected Outcomes'}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                    {caseStudy.outcome.intro}
                  </p>
                  <div className="space-y-4">
                    {caseStudy.outcome.items.map((item, i) => (
                      <div key={i} className="border-t border-white/15 pt-4">
                        {item.value && (
                          <div className="text-2xl font-sans font-bold text-white mb-1">
                            {item.value}
                          </div>
                        )}
                        <div className="text-xs font-mono text-neutral-400 uppercase tracking-wide">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.risks && caseStudy.risks.length > 0 && (
                <div className="p-8 border border-white/15 bg-[#050505] space-y-6">
                  <div className="flex items-center gap-3 text-amber-500">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="text-sm font-mono uppercase tracking-widest font-bold">
                      Identified Risks
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {caseStudy.risks.map((risk, i) => (
                      <div key={i} className="space-y-1">
                        <h4 className="text-sm font-bold text-white">{risk.title}</h4>
                        <p className="text-xs font-mono text-neutral-400 leading-relaxed">{risk.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseStudy.learned && caseStudy.learned.length > 0 && (
                <div className="p-8 border border-white/15 bg-[#050505] space-y-6">
                  <div className="flex items-center gap-3 text-white">
                    <Lightbulb className="w-5 h-5" />
                    <h3 className="text-sm font-mono uppercase tracking-widest font-bold">
                      Lessons Learned
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {caseStudy.learned.map((lesson, i) => (
                      <div key={i} className="flex gap-3 text-xs font-mono text-neutral-400">
                        <span className="text-neutral-600">{(i + 1).toString().padStart(2, '0')}</span>
                        <p className="leading-relaxed">{lesson}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 border-t border-white/15 text-center px-4 bg-[#050505]">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tighter mb-6">
          Require a similar system?
        </h2>
        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="brutalist-button px-8 py-4 text-sm"
          >
            Initiate Architecture Review
          </Link>
        </div>
      </section>
    </div>
  );
}
