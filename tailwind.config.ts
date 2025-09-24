import type { Config } from "tailwindcss";

const config: Config = {
    content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ add this if using Next.js App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing)", "cursive"],
        Poppins: ["var(--font-poppins)", "sans-serif"], 
        geist: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
