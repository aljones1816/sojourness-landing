import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-young-serif)", "serif"], // For Young Serif
        outfit: ["var(--font-outfit)", "sans-serif"], // For Outfit
        andika: ["var(--font-andika)", "sans-serif"], // For Andika
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sjLightRed: "rgb(244, 199, 210)",
        sjBrightRed: "rgb(232, 85, 40)",
        sjMustard: "rgb(228, 175, 61)",
        sjBrightBlue: "rgb(49, 84, 162)",
        sjOliveGreen: "rgb(134, 136, 59)",
        sjCream: "rgb(255, 253, 251)",
        sjLightMustard: "rgb(241, 216, 152)",
        sjLightBlue: "rgb(122, 174, 230)",
        sjLightOlive: "rgb(186, 193, 108)",
        sjBlueBlack: "rgb(22, 40, 33)",
      },
    },
  },
  plugins: [],
} satisfies Config;
