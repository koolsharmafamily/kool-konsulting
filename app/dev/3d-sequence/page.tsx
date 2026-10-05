"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const BahiKhataScene = dynamic(
  () => import("@/components/three/BahiKhataScene"),
  { ssr: false }
);

function SequenceViewer() {
  const searchParams = useSearchParams();
  const initialP = parseFloat(searchParams.get("p") || "0");
  const transparent = searchParams.get("transparent") === "true";
  const [p, setP] = useState(initialP);

  useEffect(() => {
    const paramP = searchParams.get("p");
    if (paramP !== null) {
      setP(parseFloat(paramP));
    }
  }, [searchParams]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${
        transparent ? "bg-transparent" : "bg-bg"
      }`}
    >
      <div className="mb-4 flex items-center gap-3 bg-surface p-3 rounded-xl border border-line shadow-card z-20">
        <span className="text-xs font-mono font-bold text-ink">p = {p.toFixed(2)}</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={p}
          onChange={(e) => setP(parseFloat(e.target.value))}
          className="w-48 accent-kk-indigo cursor-pointer"
        />
        <div className="flex gap-1 text-xs">
          {[0, 0.15, 0.35, 0.55, 0.8, 1.0].map((val) => (
            <button
              key={val}
              onClick={() => setP(val)}
              className={`px-2 py-1 rounded font-mono text-[11px] font-semibold transition-all ${
                Math.abs(p - val) < 0.02
                  ? "bg-kk-indigo text-white"
                  : "bg-bg text-ink-2 hover:bg-kk-indigo-050"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div
        id="stage-container"
        className="relative w-[460px] h-[480px] rounded-stage bg-surface border border-line shadow-floating p-6 flex flex-col justify-between overflow-hidden"
      >
        <div className="flex items-center justify-between z-10 pointer-events-none">
          <span className="text-xs font-medium text-ink-3">
            From registers to real-time.
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-kk-indigo-050 text-kk-indigo text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-kk-signal animate-pulse" />
            Live 3D
          </span>
        </div>

        <div id="canvas-wrapper" className="relative w-full h-[340px] flex items-center justify-center">
          <BahiKhataScene scrollProgress={p} />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-line text-xs font-semibold z-10">
          <div className="p-2 rounded-lg bg-bg text-ink flex items-center justify-between">
            <span>Websites</span>
          </div>
          <div className="p-2 rounded-lg bg-bg text-ink flex items-center justify-between">
            <span>Apps</span>
          </div>
          <div className="p-2 rounded-lg bg-bg text-ink flex items-center justify-between">
            <span>Business software</span>
          </div>
          <div className="p-2 rounded-lg bg-bg text-ink flex items-center justify-between">
            <span>Automation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dev3DSequencePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg flex items-center justify-center">Loading 3D Dev...</div>}>
      <SequenceViewer />
    </Suspense>
  );
}
