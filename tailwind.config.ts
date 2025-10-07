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

        // 🎨 ブランドカラー
        navy: {
          DEFAULT: "#0a2463", // メインネイビー
          light: "#1e3a8a",   // 明るめネイビー
        },
        gold: {
          DEFAULT: "#d4af37", // ゴールド
          dark: "#b89b32",    // 濃いゴールド
        },
        "light-gray": "#f8f9fa", // 背景用ライトグレー
      },
      fontFamily: {
        // 🖋 フォント設定（日本語対応）
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        serif: [
          '"Noto Serif JP"',
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
