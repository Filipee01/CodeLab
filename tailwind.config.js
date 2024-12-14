/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_color: "#E07B67",
        dark_10: "#121214",
        dark_20: "#17171A",
        dark_30: "#202024",
        dark_40: "#252529",
        dark_50: "#AFABB6",
        dark_60: "#FFFFFF"
      }
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      serif: ["Inter", "serif"],
    }
  },
  plugins: [],
}