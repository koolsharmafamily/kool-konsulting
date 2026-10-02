import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  markOnly?: boolean;
}

export default function Logo({ className = "", markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-ink hover:opacity-90 transition-opacity select-none ${className}`}
      aria-label="Kool Konsulting Homepage"
    >
      {/* Mirrored-K Diamond Mark */}
      <span className="w-8 h-8 rounded-lg bg-carbon flex items-center justify-center flex-shrink-0 shadow-sm">
        <svg
          viewBox="0 0 100 100"
          className="w-5 h-5 text-paper fill-none stroke-current"
          strokeWidth="8"
          strokeLinecap="square"
        >
          <path d="M14 12 V88" />
          <path d="M14 50 L50 12" />
          <path d="M14 50 L50 88" />
          <path d="M86 12 V88" />
          <path d="M86 50 L50 12" />
          <path d="M86 50 L50 88" />
        </svg>
      </span>

      {!markOnly && (
        <span className="font-display font-bold text-xl tracking-tight text-ink whitespace-nowrap font-stretch-h1">
          Kool Konsulting
        </span>
      )}
    </Link>
  );
}
