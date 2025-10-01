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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#1A237E", // 追加
        gold: "#D4AF37", // 追加
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"], // 追加
        serif: ['"Noto Serif JP"', "serif"],   // 追加
      },
    },
  },
  plugins: [],
};
export default config;
