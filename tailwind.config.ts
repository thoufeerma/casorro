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
          ivory: {
            DEFAULT: "#FAF8F5",
            soft: "#F5F2EC",
            muted: "#EBE6DC",
          },
          beige: {
            light: "#EAE4D9",
            DEFAULT: "#DFD7C8",
            dark: "#C5BBA9",
          },
          rose: {
            subtle: "#D9B8B0",
            DEFAULT: "#C99D93",
            deep: "#B5877C",
          },
          champagne: {
            light: "#EDE2CF",
            DEFAULT: "#E2D2B8",
            rich: "#D4BF9F",
          },
          burgundy: {
            subtle: "#5A2432",
            DEFAULT: "#3D1520",
            deep: "#280C14",
          },
          charcoal: {
            light: "#2A2826",
            DEFAULT: "#1A1918",
            deep: "#121110",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
        cinematic: "0.5em",
      },
    },
  },
  plugins: [],
};

export default config;
