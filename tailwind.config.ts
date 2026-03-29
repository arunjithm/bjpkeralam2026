import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm dark base matching BJP dawn aesthetic
        dark: {
          950: "#0E0400",
          900: "#1A0800",
          800: "#2A1000",
          700: "#3A1800",
          600: "#4A2000",
        },
        bjp: {
          saffron:     "#FF9933",
          saffrondark: "#E68A2E",
          gold:        "#FFD166",
          amber:       "#FF6B00",
          green:       "#138808",
          greendark:   "#0D6206",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        mono:    ["var(--font-jetbrains)", "Courier New", "monospace"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "saffron-radial": "radial-gradient(ellipse at center, rgba(255,153,51,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
