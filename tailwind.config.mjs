/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "scolors": {
          50: "#feeff0",
          100: "#fce0e0",
          200: "#f9c1c2",
          300: "#f7a1a3",
          400: "#f48285",
          500: "#f16366",
          600: "#c14f52",
          700: "#913b3d",
          800: "#602829",
          900: "#301414",
        },
      },
    },
  },
  plugins: [],
};
