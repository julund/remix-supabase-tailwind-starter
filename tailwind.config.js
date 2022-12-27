/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      "title": ["Inter", "sans-serif"],
      "sans": ["Inter", "sans-serif"],
      "mono": ["Source Code Pro", "monospace"],
    },
    fontWeight: {
      "regular": "400",
      "medium": "500",
      "semibold": "600",
      "black": "800",
    },
    extend: {
      colors: {
        base: colors.gray,
        primary: colors.sky,
        success: colors.green,
        warning: colors.amber,
        error: colors.amber,
      },
    },
  },
  plugins: [],
}
