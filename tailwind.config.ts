import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          950: "#050507",
          900: "#09090B", // Deep Space Black (Main Canvas)
          850: "#111114",
        },
        charcoal: {
          DEFAULT: "#18181B", // Charcoal Matte (Elevated Cards / Bento)
          light: "#212126",
          dark: "#141416",
          border: "#27272A", // Subtle borders
          "border-hover": "rgba(157, 0, 255, 0.45)",
        },
        cyber: {
          purple: "#9D00FF", // Primary Cyber Purple
          glow: "#B84DFF",
          light: "#D884FF",
          dark: "#6800AC",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "cyber-sm": "0 0 15px -3px rgba(157, 0, 255, 0.35)",
        "cyber-md": "0 0 25px -4px rgba(157, 0, 255, 0.45)",
        "cyber-lg": "0 0 45px -5px rgba(157, 0, 255, 0.55)",
        "cyber-glow": "0 0 60px 0px rgba(157, 0, 255, 0.30)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "marquee-left": "marqueeLeft 30s linear infinite",
        "pulse-glow": "pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "light-sweep": "lightSweep 3s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 15px 2px rgba(157, 0, 255, 0.4)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 35px 8px rgba(157, 0, 255, 0.75)",
            transform: "scale(1.02)",
          },
        },
        lightSweep: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "50%, 100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
