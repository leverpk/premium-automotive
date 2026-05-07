import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#060708",
        midnight: "#0d0e10",
        graphite: "#17191c",
        ice: "#f4f1ea",
        electric: "#b8a06a",
        lacquer: "#111316",
        steel: "#9da4a9"
      },
      boxShadow: {
        glow: "0 18px 70px rgba(0, 0, 0, 0.48)"
      },
      backgroundImage: {
        "radial-blue": "linear-gradient(135deg, rgba(244, 241, 234, 0.08), rgba(184, 160, 106, 0.10) 36%, rgba(6, 7, 8, 0.92))"
      }
    }
  },
  plugins: []
};

export default config;
