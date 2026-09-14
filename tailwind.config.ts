import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ev: {
          black: "#0a0a0a",
          charcoal: "#141414",
          surface: "#1a1a1a",
          muted: "#888888",
          offwhite: "#f5f5f0",
          white: "#ffffff",
          crimson: "#dc143c",
          red: "#e63946",
          pink: "#ff6b9d",
          violet: "#8b5cf6",
          neon: {
            yellow: "#FFE600",
            pink: "#FF0066",
            cyan: "#00CCFF",
            red: "#FF0033",
            orange: "#FF8C00",
            blue: "#0066FF",
            cream: "#F5F0E1",
            lime: "#66FF00",
          },
          paper: "#E8E8E4",
        },
      },
      fontFamily: {
        display: ["'OBO Star'", "Impact", "system-ui", "sans-serif"],
        brutal: ["'OBO Star'", "Impact", "system-ui", "sans-serif"],
        obo: ["'OBO Star'", "Impact", "sans-serif"],
        sans: ["'Halenoir'", "system-ui", "sans-serif"],
        serif: ["Georgia", "'Times New Roman'", "serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #dc143c 0%, #ff6b9d 50%, #8b5cf6 100%)",
        "gradient-glow":
          "radial-gradient(ellipse at center, rgba(220,20,60,0.35) 0%, rgba(255,107,157,0.15) 40%, transparent 70%)",
        "gradient-pill":
          "linear-gradient(90deg, #FF0066 0%, #FF0033 50%, #CC0000 100%)",
        "gradient-progress":
          "linear-gradient(90deg, #66FF00 0%, #0066FF 100%)",
        "checkerboard":
          "repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 20px 20px",
        "paper-texture": "url(\"/Backgeound.jpg\")",
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #000000",
        "brutal-lg": "6px 6px 0px 0px #000000",
        "brutal-xl": "8px 8px 0px 0px #000000",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "progress-fill": "progressFill 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        progressFill: {
          "0%": { width: "60%" },
          "100%": { width: "90%" },
        },
      },
      maxWidth: {
        content: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
