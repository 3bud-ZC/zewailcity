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
        brand: {
          purple: "#4F46E5",
          "purple-dark": "#4338CA",
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          accent: "#3B82F6",
        },
      },
      backgroundImage: {
        "geometric-pattern":
          "linear-gradient(135deg, #f5f3ff 0%, #eef2ff 50%, #e0e7ff 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
