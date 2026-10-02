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
        paper: "#FBFAF6",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#17161C",
          2: "#55515E",
          3: "#6F6A78",
        },
        line: {
          DEFAULT: "#E6E2DA",
          strong: "#D6D0C4",
        },
        carbon: {
          DEFAULT: "#35309A",
          600: "#2B2783",
          "050": "#EEEDFA",
        },
        bahi: "#B3261E",
        "ledger-red": "#C9443A",
        "ledger-rule": "#C8D3EC",
        leaf: "#1E7A4C",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-anek)", "sans-serif"],
        sans: ["var(--font-mukta)", "sans-serif"],
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
