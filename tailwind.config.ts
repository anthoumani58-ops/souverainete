import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0F12",
        ember: "#E04B1A",
        sand: "#F6E8D5",
        moss: "#1D5B4F",
        sky: "#7CC6D6"
      },
      boxShadow: {
        glow: "0 0 24px rgba(224, 75, 26, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
