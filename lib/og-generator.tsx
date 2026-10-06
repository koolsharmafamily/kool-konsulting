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
        width: "100%",
        height: "100%",
        background: "#F3F2EE",
        padding: "58px 70px",
        color: "#0E1016",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg viewBox="0 0 114 64" width="80" height="46" fill="#5145E5">
            <path d="M43 5h11v54H43zM38 29 17 5H2l25 27L2 59h15l21-24zM60 5h11v54H60zM76 29 97 5h15L87 32l25 27H97L76 35z" />
          </svg>
          <span style={{ fontSize: 29 }}>Kool Konsulting</span>
        </div>
        <span style={{ fontSize: 16, color: "#565860" }}>{badge}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <h1
          style={{
            fontSize: title.length > 55 ? 48 : 62,
            letterSpacing: "-2.5px",
            lineHeight: 1.13,
            margin: 0,
            fontWeight: 500,
            maxWidth: 1030,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 25,
            lineHeight: 1.5,
            color: "#565860",
            margin: 0,
            maxWidth: 960,
          }}
        >
          {subtitle}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #c9c9c4",
          paddingTop: 25,
          fontSize: 17,
          color: "#5145E5",
        }}
      >
        <span>{meta}</span>
        <span>Nagpur, India</span>
      </div>
    </div>,
    ogSize,
  );
}
