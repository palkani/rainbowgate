import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
        },
        brand: {
          DEFAULT: "var(--color-brand)",
          soft: "var(--color-brand-soft)",
        },
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(26 26 26 / 0.04), 0 1px 3px 0 rgb(26 26 26 / 0.06)",
        md: "0 4px 6px -1px rgb(26 26 26 / 0.07), 0 2px 4px -2px rgb(26 26 26 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
