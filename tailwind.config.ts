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
        bjp: {
          saffron:     "#FF9933",
          saffrondark: "#E68A2E",
          saffronsoft: "#FFF5EB", // Very light saffron for cards/bg
          gold:        "#FFD166",
          green:       "#138808",
          greensoft:   "#F0FDF4", // Very light green for success/positive cards
          greendark:   "#0D6206",
        },
        // Rich tinted neutrals to replace cold grays
        ink: {
          950: "#1F140B", // Deepest saffron-black
          900: "#2B1B11",
          800: "#3B2A1D",
          700: "#4B3728",
          600: "#5D4635",
          500: "#705849",
          400: "#8A6E5E",
          300: "#A6897B",
          200: "#CBB7A8",
          100: "#E7D9CF",
        },
        forest: {
          950: "#051A03", // Deepest green-black
          900: "#0A2906",
          800: "#113D0B",
          700: "#1A5212",
          600: "#24691A",
        }
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        quote:   ["var(--font-playfair)", "Georgia", "serif"],
        mono:    ["var(--font-jetbrains)", "Courier New", "monospace"],
        sans:    ["var(--font-source)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
