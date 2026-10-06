import { ImageResponse } from "next/og";
export interface OgImageOptions {
  title: string;
  subtitle?: string;
  badge?: string;
  meta?: string;
}
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export function createOgImage({
  title,
  subtitle = "Beautiful digital experiences and intelligent operations.",
  badge = "An independent technology studio",
  meta = "AI & Automation · Websites · Apps",
}: OgImageOptions) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        background: "#F3F2EE",
        padding: "48px 60px",
        color: "#0E1016",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <svg viewBox="0 0 114 64" width="76" height="42" fill="#5145E5">
          <path d="M43 5h11v54H43zM38 29 17 5H2l25 27L2 59h15l21-24zM60 5h11v54H60zM76 29 97 5h15L87 32l25 27H97L76 35z" />
        </svg>
        <span style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.5px" }}>
          Kool Konsulting
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          maxWidth: 630,
        }}
      >
        <span
          style={{
            fontSize: 12.5,
            letterSpacing: "2.5px",
            color: "#5145E5",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          {badge}
        </span>
        <h1
          style={{
            fontSize: title.length > 35 ? 42 : 54,
            letterSpacing: "-2px",
            lineHeight: 1.14,
            margin: 0,
            fontWeight: 600,
            maxWidth: 600,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.45,
            color: "#565860",
            margin: 0,
            maxWidth: 580,
          }}
        >
          {subtitle}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 13.5,
          color: "#7E8494",
          fontFamily: "monospace",
          letterSpacing: "1px",
        }}
      >
        <span>{meta}</span>
        <span>·</span>
        <span>NAGPUR, INDIA</span>
      </div>
    </div>,
    ogSize,
  );
}
