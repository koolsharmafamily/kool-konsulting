import React from "react";
import Link from "next/link";

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
    "inline-flex items-center justify-center font-sans font-semibold text-[17px] leading-none transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    // Primary: ink background, paper text
    primary:
      "bg-ink text-paper hover:bg-[#2B2934] active:bg-[#000000] px-6 py-3.5 rounded-btn shadow-sm",
    // WhatsApp: green background, always ink text (WCAG AA compliance)
    whatsapp:
      "bg-whatsapp text-ink hover:opacity-95 active:opacity-90 px-6 py-3.5 rounded-btn shadow-sm font-semibold",
    // Secondary: white surface with line border
    secondary:
      "bg-surface text-ink border border-line hover:border-line-strong hover:bg-paper active:bg-line px-6 py-3.5 rounded-btn",
    // Link: inline carbon text
    link: "text-carbon hover:text-carbon-600 underline underline-offset-4 p-0 font-medium",
  };

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
          {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
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
      {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
