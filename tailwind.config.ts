import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3F2EE",
        paper: "#F3F2EE",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#0E1016",
          2: "#4A4D63",
          3: "#6B6F86",
        },
        line: {
          DEFAULT: "#E3E6EF",
          strong: "#D1D5E2",
        },
        "kk-indigo": {
          DEFAULT: "#5145E5",
          600: "#2F28B8",
          "050": "#EEEDFF",
        },
        "kk-signal": "#22C3EE",
        engine: "#0B0C16",
        carbon: {
          DEFAULT: "#5145E5",
          600: "#2F28B8",
          "050": "#EEEDFF",
        },
        bahi: "#B3261E",
        "ledger-red": "#C9443A",
        "ledger-rule": "#C8D3EC",
        leaf: "#166534",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        handwriting: ["var(--font-kalam)", "cursive"],
      },
      borderRadius: {
        stage: "28px",
        card: "18px",
        btn: "12px",
        phone: "40px",
      },
      boxShadow: {
        floating:
          "0 1px 0 rgba(23,22,28,.04), 0 24px 48px -24px rgba(53,48,154,.28), 0 8px 16px -8px rgba(23,22,28,.12)",
      },
    },
  },
  plugins: [],
};

export default config;
