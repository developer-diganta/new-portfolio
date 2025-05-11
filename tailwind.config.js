/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        primary: "#F2F2F2",
        secondary: "#A6A6A6",
        accent: "#4ADE80",
        "accent-hover": "#22C55E",
        card: "#1A1A1A",
        border: "#2E2E2E",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },

    },
  },
  plugins: [],
}