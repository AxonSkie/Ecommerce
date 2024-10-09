import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
      fontFamily: {
        advent: ['"Advent Pro"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins' , 'sans-serif'],
      },

      primRed: {
        primary: 'EBABAB',
        secondary: ''
      }
    },
  },
  plugins: [],
};
export default config;
