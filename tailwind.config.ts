import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(2,6,23,0.12)",
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(1200px 600px at 50% -10%, rgba(99,102,241,0.25), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;