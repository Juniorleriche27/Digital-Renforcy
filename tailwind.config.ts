import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#4572ff",
          600: "#2f56ff",
          700: "#1e48ff",
          900: "#0a1f80",
        },
        gold: {
          400: "#ffc84a",
          500: "#e8a820",
          600: "#c8880a",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        card: "0 14px 40px -14px rgba(2,6,23,0.18)",
        gold: "0 14px 40px -14px rgba(232,168,32,0.55)",
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(1200px 600px at 50% -10%, rgba(69,114,255,0.22), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
