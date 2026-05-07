import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06101f",
        midnight: "#07182f",
        graphite: "#101722",
        ice: "#f7fbff",
        electric: "#00a3ff"
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 163, 255, 0.25)"
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle at 50% 0%, rgba(0, 163, 255, 0.22), transparent 36%)"
      }
    }
  },
  plugins: []
};

export default config;
