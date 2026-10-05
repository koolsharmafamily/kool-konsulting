import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export interface OgImageOptions {
  title: string;
  subtitle?: string;
  badge?: string;
  meta?: string;
}

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

export function createOgImage({
  title,
  subtitle = "We build websites, apps, business software and automations for growing Indian businesses.",
  badge = "Nagpur, Maharashtra",
  meta = "Websites · Apps · Business Software · Automation",
}: OgImageOptions) {
  const fontPath = path.join(
    process.cwd(),
    "node_modules/@fontsource/anek-latin/files/anek-latin-latin-700-normal.woff"
  );
  const fontData = fs.readFileSync(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          backgroundColor: "#F6F7FB",
          position: "relative",
          fontFamily: "'Anek Latin'",
        }}
      >
        {/* Dot Grid Background */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="og-dot-grid"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#D9DCE8" />
            </pattern>
          </defs>
          <rect width="1200" height="630" fill="url(#og-dot-grid)" />
        </svg>

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Logo Mark + Wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <svg
              viewBox="0 0 100 100"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#3D35E0"
                strokeWidth="15"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
              >
                <path d="M17 12V88M83 12V88" strokeLinecap="butt" />
                <path d="M22 50L50 22L78 50L50 78Z" strokeLinecap="butt" />
              </g>
              <rect x="45" y="45" width="10" height="10" fill="#22C3EE" />
            </svg>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#0E0F1A",
                letterSpacing: "-0.02em",
              }}
            >
              Kool Konsulting
            </span>
          </div>

          {/* Badge with signal node */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "#EEEDFF",
              border: "1px solid #DCD9F5",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#22C3EE",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#3D35E0",
              }}
            >
              {badge}
            </span>
          </div>
        </div>

        {/* Center: Main Headline & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            position: "relative",
            zIndex: 10,
            maxWidth: "1020px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? "50px" : "60px",
              fontWeight: 700,
              color: "#0E0F1A",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#4A4D63",
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom Bar: Capabilities & Domain with Signal Node */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid #E3E6EF",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: "#6B6F86",
              fontSize: "20px",
            }}
          >
            {meta}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#3D35E0",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#22C3EE",
              }}
            />
            <span>kool-konsulting.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: "Anek Latin",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
