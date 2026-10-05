"use client";

import React, { useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { LogoMarkSmall } from "@/components/brand/LogoMarkSmall";
import { Logo } from "@/components/brand/Logo";
import { WorkingNode } from "@/components/brand/WorkingNode";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";

const SIZES = [16, 24, 32, 48, 64, 128, 512];

export default function BrandAuditView() {
  const [motionKey, setMotionKey] = useState(0);

  return (
    <div className="min-h-screen bg-bg text-ink p-6 md:p-12 font-sans selection:bg-kk-indigo-050 selection:text-kk-indigo">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-line pb-6 space-y-2">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-kk-indigo-050 text-kk-indigo text-xs font-semibold uppercase tracking-wider">
              Internal Brand Spec
            </span>
            <span className="text-xs text-ink-3">v3.1 Checkpoint L</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-ink">
            Kool Konsulting Logo & Mark Verification
          </h1>
          <p className="text-ink-2 text-sm max-w-2xl">
            "Facing K's with a signal node" locked geometry. Verifying joint precision at 512 px,
            small-scale legibility at 16–32 px, three lockups, live SVG motion, and comparison against
            back-to-back variant.
          </p>
        </div>

        {/* 1. Joint Inspection at 512 px */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-ink">
              1. Joint Precision & Mitre Verification (512 px)
            </h2>
            <p className="text-xs text-ink-3">
              Geometry rule: diamond corners sit at x=24 and x=76; stems span 13.5–24.5 and 75.5–86.5.
              Mitred tips land strictly inside the stems and never poke out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* On Light */}
            <div className="p-8 rounded-card bg-surface border border-line flex flex-col items-center justify-center space-y-4 shadow-sm">
              <span className="text-xs font-medium text-ink-3">Light background (512×512)</span>
              <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] flex items-center justify-center border border-dashed border-line rounded-lg p-4 bg-bg">
                <LogoMark size="100%" tone="indigo" />
              </div>
              <div className="flex gap-4 text-xs text-ink-2">
                <span>Stems: <strong className="text-kk-indigo">#3D35E0</strong> (11px)</span>
                <span>Diamond: <strong className="text-kk-indigo">#3D35E0</strong> (mitred)</span>
                <span>Node: <strong className="text-[#22C3EE]">#22C3EE</strong> (14×14 at 45°)</span>
              </div>
            </div>

            {/* On Dark (Engine Room) */}
            <div className="p-8 rounded-card bg-engine border border-[#23253A] flex flex-col items-center justify-center space-y-4 shadow-sm">
              <span className="text-xs font-medium text-slate-400">Dark background #0B0C16 (512×512)</span>
              <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] flex items-center justify-center border border-dashed border-white/10 rounded-lg p-4 bg-black/40">
                <LogoMark size="100%" tone="light" />
              </div>
              <div className="flex gap-4 text-xs text-slate-300">
                <span>Stems & Diamond: <strong className="text-[#F6F7FB]">#F6F7FB</strong></span>
                <span>Node: <strong className="text-[#22C3EE]">#22C3EE</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Scale Ladder */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-ink">
              2. Scale Ladder across Contexts (16 px to 128 px)
            </h2>
            <p className="text-xs text-ink-3">
              16–32 px uses LogoMarkSmall (stroke width 15, no node). 48–512 px uses full LogoMark with cyan signal node.
            </p>
          </div>

          <div className="overflow-x-auto border border-line rounded-card bg-surface shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-bg border-b border-line text-xs text-ink-3 uppercase">
                <tr>
                  <th className="p-4">Target Size</th>
                  <th className="p-4">Variant Used</th>
                  <th className="p-4">On Light (#F6F7FB)</th>
                  <th className="p-4">On Dark (#0B0C16)</th>
                  <th className="p-4">App Tile (Gradient)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {SIZES.filter((s) => s <= 128).map((size) => {
                  const isSmall = size <= 32;
                  return (
                    <tr key={size} className="hover:bg-bg/50">
                      <td className="p-4 font-mono font-bold text-xs">{size} px</td>
                      <td className="p-4 text-xs text-ink-2">
                        {isSmall ? "LogoMarkSmall (w15, no node)" : "LogoMark (w11, with node)"}
                      </td>
                      <td className="p-4 bg-bg">
                        <div className="flex items-center justify-center p-2 rounded bg-surface border border-line w-fit">
                          {isSmall ? (
                            <LogoMarkSmall size={size} tone="indigo" />
                          ) : (
                            <LogoMark size={size} tone="indigo" />
                          )}
                        </div>
                      </td>
                      <td className="p-4 bg-engine">
                        <div className="flex items-center justify-center p-2 rounded bg-black/40 border border-white/10 w-fit">
                          {isSmall ? (
                            <LogoMarkSmall size={size} tone="light" />
                          ) : (
                            <LogoMark size={size} tone="light" />
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          className="flex items-center justify-center rounded-[24%] shadow-sm overflow-hidden"
                          style={{
                            width: size,
                            height: size,
                            background: "linear-gradient(145deg, #4B42FF 0%, #2A23B8 100%)",
                          }}
                        >
                          {isSmall ? (
                            <LogoMarkSmall size={size * 0.72} tone="light" />
                          ) : (
                            <LogoMark size={size * 0.72} tone="light" />
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Three Lockups */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-ink">
              3. The Three Lockups
            </h2>
            <p className="text-xs text-ink-3">
              Anek Latin 680, font-stretch: 106%, letter-spacing: -0.02em, sentence case, no wrapping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Horizontal (Default) */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 shadow-sm">
              <span className="text-xs font-semibold text-kk-indigo uppercase tracking-wider block">
                Horizontal (Default Header / Nav)
              </span>
              <div className="p-6 rounded-lg bg-bg border border-line flex items-center justify-center">
                <Logo variant="horizontal" size="md" />
              </div>
              <p className="text-xs text-ink-3">
                Mark height 24 px (1.3× cap height), gap 8 px. No box or tile around mark.
              </p>
            </div>

            {/* Stacked */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 shadow-sm">
              <span className="text-xs font-semibold text-kk-indigo uppercase tracking-wider block">
                Stacked (/credentials & OG Image)
              </span>
              <div className="p-6 rounded-lg bg-bg border border-line flex items-center justify-center">
                <Logo variant="stacked" size="lg" />
              </div>
              <p className="text-xs text-ink-3">
                Mark 32 px above wordmark, centered vertically.
              </p>
            </div>

            {/* Mark Only */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 shadow-sm">
              <span className="text-xs font-semibold text-kk-indigo uppercase tracking-wider block">
                Mark Only (&lt;360px & Avatars)
              </span>
              <div className="p-6 rounded-lg bg-bg border border-line flex items-center justify-center">
                <Logo variant="markOnly" size="lg" />
              </div>
              <p className="text-xs text-ink-3">
                Standalone mark with node. Clean square footprint.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Motion & Working Node */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-ink">
              4. Brand Motion & Working Indicators (§2.4)
            </h2>
            <p className="text-xs text-ink-3">
              First load stroke draw (stems &rarr; diamond &rarr; node pulse), desktop hover pulse, and form submission working node.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Draw-in replay */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-2 uppercase tracking-wider">
                  First-load Draw-in (~900 ms)
                </span>
                <button
                  type="button"
                  onClick={() => setMotionKey((k) => k + 1)}
                  className="px-2.5 py-1 text-xs font-medium rounded-btn bg-kk-indigo-050 text-kk-indigo hover:bg-kk-indigo hover:text-white transition-colors"
                >
                  Replay
                </button>
              </div>
              <div
                key={motionKey}
                className="p-8 rounded-lg bg-bg border border-line flex items-center justify-center h-32"
              >
                <LogoMark size={64} tone="indigo" animated={true} />
              </div>
              <p className="text-[11px] text-ink-3">
                1. Stems draw upwards &middot; 2. Diamond draws closed &middot; 3. Cyan node pulses in.
              </p>
            </div>

            {/* Hover pulse */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 shadow-sm">
              <span className="text-xs font-semibold text-ink-2 uppercase tracking-wider block">
                Desktop Hover Pulse (300 ms)
              </span>
              <div className="p-8 rounded-lg bg-bg border border-line flex items-center justify-center h-32 group/demo cursor-pointer">
                <div className="kk-hover-pulse">
                  <LogoMark size={64} tone="indigo" />
                </div>
              </div>
              <p className="text-[11px] text-ink-3">
                Hover over the mark above to see the node pulse softly.
              </p>
            </div>

            {/* Working node indicator */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 shadow-sm">
              <span className="text-xs font-semibold text-ink-2 uppercase tracking-wider block">
                Working Node (Form Spinner)
              </span>
              <div className="p-8 rounded-lg bg-bg border border-line flex flex-col items-center justify-center h-32 gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-btn bg-ink text-white text-xs font-medium"
                >
                  <WorkingNode size={14} />
                  <span>Submitting request...</span>
                </button>
              </div>
              <p className="text-[11px] text-ink-3">
                Rotating signal node replaces generic circular spinners sitewide.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Official WhatsApp Glyph Check */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-display font-bold text-ink">
              5. Official WhatsApp Glyph Verification
            </h2>
            <p className="text-xs text-ink-3">
              Official WhatsApp SVG phone + bubble glyph replacing generic MessageSquare across all CTA buttons.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 p-6 rounded-card bg-surface border border-line">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-btn bg-whatsapp text-ink font-semibold text-sm shadow-sm hover:opacity-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-ink" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-btn bg-surface border border-line text-ink font-semibold text-sm hover:bg-bg"
            >
              <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
              <span>WhatsApp (Secondary)</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-ink-3">
              <WhatsAppIcon className="w-5 h-5 text-whatsapp" />
              <span>Verified official SVG glyph</span>
            </div>
          </div>
        </section>

        {/* 6. Comparison: Locked vs Back-to-Back Variant */}
        <section className="space-y-4 border-t border-line pt-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-display font-bold text-ink">
                6. Comparison: Locked "Facing K's" vs "Back-to-Back"
              </h2>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-semibold">
                Reference Only
              </span>
            </div>
            <p className="text-xs text-ink-3">
              Kulvir is keeping the back-to-back version to compare later. (Not used on the live site).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Locked Facing K's */}
            <div className="p-6 rounded-card bg-surface border-2 border-kk-indigo space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-kk-indigo">LOCKED: Facing K's with Signal Node</span>
                <span className="px-2 py-0.5 rounded bg-kk-indigo-050 text-kk-indigo text-xs font-semibold">
                  Approved & Active
                </span>
              </div>
              <div className="h-64 flex items-center justify-center p-4 bg-bg rounded-lg border border-line">
                <LogoMark size={200} tone="indigo" />
              </div>
              <p className="text-xs text-ink-2">
                Shared arms form diamond at centre; signal node inside. Clean, unified silhouette.
              </p>
            </div>

            {/* Back-to-Back Variant */}
            <div className="p-6 rounded-card bg-surface border border-line space-y-4 opacity-90">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">COMPARISON: Back-to-Back Variant</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                  Archive / Reference
                </span>
              </div>
              <div className="h-64 flex items-center justify-center p-4 bg-bg rounded-lg border border-line">
                {/* Back to back SVG geometry: M41 12V88M59 12V88 with arms M12 14L41 50L12 86M88 14L59 50L88 86 */}
                <svg
                  viewBox="0 0 100 100"
                  width={200}
                  height={200}
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-kk-indigo"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="11"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                  >
                    <path d="M41 12V88M59 12V88" strokeLinecap="butt" />
                    <path d="M12 14L41 50L12 86" strokeLinecap="butt" />
                    <path d="M88 14L59 50L88 86" strokeLinecap="butt" />
                  </g>
                  <rect
                    x="44"
                    y="44"
                    width="12"
                    height="12"
                    transform="rotate(45 50 50)"
                    fill="var(--kk-signal, #22C3EE)"
                  />
                </svg>
              </div>
              <p className="text-xs text-ink-3">
                Stems in middle (x=41, 59), arms opening outwards to x=12 and 88.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
