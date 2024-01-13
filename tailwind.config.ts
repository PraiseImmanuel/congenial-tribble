import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/hero.svg")',
        second: 'url("/bg-two.svg")',
      },
      colors: {
        black: "#333",
        primary: "#81A460",
      },
    },
  },
  plugins: [],
};
export default config;
