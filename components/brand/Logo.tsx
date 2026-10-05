"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { LogoMarkSmall } from "./LogoMarkSmall";

export interface LogoProps {
  variant?: "horizontal" | "stacked" | "markOnly";
  tone?: "indigo" | "light" | "mono";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
  markOnly?: boolean; // legacy compatibility prop
}

export function Logo({
  variant = "horizontal",
  tone = "indigo",
  size = "md",
  animated = false,
  className = "",
  markOnly = false,
}: LogoProps) {
  const isMarkOnly = markOnly || variant === "markOnly";
  const isStacked = variant === "stacked";

  // First load animation: only once per session
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (animated && typeof window !== "undefined") {
      const hasPlayed = sessionStorage.getItem("kk_logo_animated");
      if (!hasPlayed) {
        setShouldAnimate(true);
        sessionStorage.setItem("kk_logo_animated", "1");
      }
    }
  }, [animated]);

  // Height is 1.3x cap-height of wordmark; gap is ~0.35x mark width
  const markPx = size === "sm" ? 18 : size === "lg" ? 32 : 24;

  const wordmarkClass =
    size === "sm"
      ? "text-[16px]"
      : size === "lg"
      ? "text-[24px]"
      : "text-[19px]";

  const textTone =
    tone === "light"
      ? "text-[#F6F7FB]"
      : tone === "mono"
      ? "text-current"
      : "text-ink";

  return (
    <Link
      href="/"
      className={`group/logo inline-flex select-none transition-opacity hover:opacity-95 ${
        isStacked
          ? "flex-col items-center gap-2"
          : "items-center gap-2"
      } ${className}`}
      aria-label="Kool Konsulting Homepage"
    >
      {/* Mark: no surrounding tile/box in header */}
      <span className="kk-hover-pulse flex shrink-0 items-center justify-center">
        {size === "sm" ? (
          <LogoMarkSmall size={markPx} tone={tone} />
        ) : (
          <LogoMark
            size={markPx}
            tone={tone}
            animated={shouldAnimate}
          />
        )}
      </span>

      {!isMarkOnly && (
        <span
          className={`font-display font-[680] leading-none ${wordmarkClass} ${textTone} whitespace-nowrap font-stretch-h1`}
          style={{
            fontStretch: "106%",
            letterSpacing: "-0.02em",
          }}
        >
          Kool Konsulting
        </span>
      )}
    </Link>
  );
}

export default Logo;
