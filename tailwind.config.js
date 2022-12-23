/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      "title": ["Inter", "sans-serif"],
      "sans": ["Inter", "sans-serif"],
      "mono": ["Inconsolata", "monospace"],
    },
    fontWeight: {
      "regular": "400",
      "semibold": "600",
      "black": "800",
    },
    extend: {
      colors: {
        primary: colors.sky,
        base: colors.gray,
      },
    },
  },
  plugins: [],
}
