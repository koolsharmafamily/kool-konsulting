import React from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "secondary" | "link";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  target,
  rel,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold text-[16px] leading-none transition-all duration-150 active:translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    // Primary: ink background, white text, shifts to kk-indigo on hover with 150ms transition
    primary:
      "bg-ink text-white hover:bg-kk-indigo active:bg-kk-indigo-600 px-6 py-3.5 rounded-btn shadow-sm",
    // WhatsApp: official glyph, #25D366 background, ink text
    whatsapp:
      "bg-whatsapp text-ink hover:opacity-95 active:opacity-90 px-6 py-3.5 rounded-btn shadow-sm font-semibold",
    // Secondary: white with line border
    secondary:
      "bg-surface text-ink border border-line hover:border-line-strong hover:bg-bg active:bg-line px-6 py-3.5 rounded-btn",
    // Link: inline kk-indigo text
    link: "text-kk-indigo hover:text-kk-indigo-600 underline underline-offset-4 p-0 font-medium",
  };

  const resolvedIcon = icon || (variant === "whatsapp" ? <WhatsAppIcon className="w-4 h-4 text-ink" /> : null);

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        >
          {resolvedIcon && <span className="mr-2 flex-shrink-0">{resolvedIcon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {resolvedIcon && <span className="mr-2 flex-shrink-0">{resolvedIcon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {resolvedIcon && <span className="mr-2 flex-shrink-0">{resolvedIcon}</span>}
      <span>{children}</span>
    </button>
  );
}

