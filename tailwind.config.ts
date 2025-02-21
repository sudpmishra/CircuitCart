import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        ecBackground: "#f7f7f7",
        ecBackgroundDark: "#1a202c",
        ecForeground: "#333",
        ecForegroundDark: "#f7f7f7",
        ecBackgroundBody: "#e2e2e2",
        ecBackgroundBodyDark: "#2d3748",
        ecForegroundBody: "#333",
        ecForegroundBodyDark: "#f7f7f7",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
