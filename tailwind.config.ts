import type { Config } from "tailwindcss";

const config = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-dark-blue": "#0D5B6F",
        "gold-accent": "#D4A574",
        "gold-dark": "#B89A60",
        charcoal: "#2C3E50",
        "light-gray": "#F5F5F5",
        "teal-accent": "#1FA39C",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
