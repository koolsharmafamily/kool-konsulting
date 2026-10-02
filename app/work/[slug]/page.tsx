import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/work";
import { StatusBadge } from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLeft, ArrowRight, Check, MessageSquare, ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Kool Konsulting`,
    description: project.problem,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Next and previous navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const waProjectUrl = getWhatsAppUrl(
    `Hi Kulvir, I saw the ${project.title} project on your website. I want to build something similar for my business.`
  );

  return (
    <div className="bg-paper min-h-screen py-12 md:py-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-3 hover:text-carbon transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all work</span>
          </Link>
        </div>

        {/* 1. Header & Metadata */}
        <div className="space-y-4 border-b border-line pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-carbon bg-carbon-050 px-3 py-1 rounded-full border border-[#DCD9F5]">
              {project.services.join(" · ")}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink tracking-tight leading-tight font-stretch-h1">
            {project.title}
          </h1>

          <div className="text-sm text-ink-3 font-medium flex flex-wrap items-center gap-4">
            <span>{project.client}</span>
            {project.place && <span>• {project.place}</span>}
            {project.year && <span>• {project.year}</span>}
          </div>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-carbon hover:underline"
              >
                <span>Visit live project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* 2. The Problem */}
        <div className="space-y-3">
          <span className="text-xs font-semibold text-ledger-red uppercase tracking-wider block">
            The Problem, in the owner's words
          </span>
          <div className="p-6 md:p-8 bg-surface rounded-card border border-line text-base md:text-lg text-ink font-normal leading-relaxed shadow-sm">
            "{project.problem}"
          </div>
        </div>

        {/* 3. What We Built */}
        <div className="space-y-4">
          <span className="text-xs font-semibold text-ink-3 uppercase tracking-wider block">
            What was built & delivered
          </span>
          <div className="grid grid-cols-1 gap-3">
            {project.built.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-surface rounded-card border border-line flex items-start gap-3 text-sm md:text-base text-ink"
              >
                <Check className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. How It Works (Flow diagram in HTML) */}
        {project.howItWorks && project.howItWorks.length > 0 && (
          <div className="space-y-4">
            <span className="text-xs font-semibold text-carbon uppercase tracking-wider block">
              How the system works (Step by step)
            </span>
            <div className="bg-surface rounded-stage border border-line p-6 md:p-8 space-y-4">
              <ol className="relative border-l-2 border-carbon-050 ml-3 space-y-6">
                {project.howItWorks.map((step, idx) => (
                  <li key={idx} className="ml-6">
                    <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 rounded-full bg-carbon-050 text-carbon font-bold text-xs border border-[#DCD9F5]">
                      {idx + 1}
                    </span>
                    <p className="text-sm md:text-base text-ink font-medium leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* 5. Measured Results (If real figures exist) */}
        {project.results && project.results.length > 0 && (
          <div className="space-y-4">
            <span className="text-xs font-semibold text-leaf uppercase tracking-wider block">
              Measured operational results
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-surface border border-[#CEEAD6] rounded-card space-y-1 shadow-sm"
                >
                  <div className="text-3xl font-display font-bold text-leaf tabular-nums">
                    {res.value}
                  </div>
                  <div className="text-sm font-semibold text-ink">
                    {res.label}
                  </div>
                  <div className="text-[11px] text-ink-3">
                    Source: {res.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Tools Stack */}
        {project.tools && project.tools.length > 0 && (
          <div className="space-y-2 border-t border-line pt-6">
            <span className="text-xs font-semibold text-ink-3 uppercase tracking-wider block">
              Tools & Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-surface border border-line text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 7. Action Card */}
        <div className="p-8 md:p-12 rounded-stage bg-carbon-050 border border-[#DCD9F5] text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
            Want something like this for your business?
          </h2>
          <p className="text-sm md:text-base text-ink-2 max-w-lg mx-auto">
            Book a 30-minute tech check-up. We'll examine your current setup and show you what can be automated first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              href={waProjectUrl}
              icon={<MessageSquare className="w-5 h-5" />}
            >
              Chat about this project on WhatsApp
            </Button>
            <Button variant="primary" href="/contact">
              Get a free tech check-up
            </Button>
          </div>
        </div>

        {/* 8. Prev / Next Navigation */}
        <div className="pt-6 border-t border-line flex items-center justify-between text-xs font-semibold">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="inline-flex items-center gap-1.5 text-ink hover:text-carbon transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: {prevProject.title.slice(0, 30)}...</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-1.5 text-ink hover:text-carbon transition-colors text-right"
            >
              <span>Next: {nextProject.title.slice(0, 30)}...</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </div>
  );
}
