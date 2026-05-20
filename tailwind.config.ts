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
        brand: {
          50:  "#f0fdf9",
          100: "#ccfbee",
          200: "#99f5dc",
          300: "#5ee9c4",
          400: "#2dd4a8",
          500: "#10b98f",
          600: "#059474",
          700: "#04755c",
          800: "#065d4a",
          900: "#064d3e",
          950: "#022c24",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["var(--font-petit-formal)", "cursive"],
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee:         "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
