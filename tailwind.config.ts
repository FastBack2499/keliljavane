import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'verySmall': '365px',
      'ultraSmall': '330px',
      'small': '400px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      bhelal: ["BHelal", "sans-serif"],
      sogand: ["sogand", "sans-serif"],
      casablanca: ['Casablanca', 'sans-serif'],
      casablancaHaevy: ['CasablancaHeavy', 'sans-serif'],
      bmorvarid: ["BMorvarid", "sans-serif"],
      aref: ["Aref", "sans-serif"],
      traffic: ["Far_Traffic", "sans-serif"],
      basset: ["Far_Baseet", "sans-serif"],
      vazir: ["Vazirmatn", "sans-serif"],
      sahel: ["Sahel", "sans-serif"]
    }
  },
  plugins: [],
} satisfies Config;
