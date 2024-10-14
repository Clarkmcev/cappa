/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5E5CB",
        secondary: "#D5CEA3",
        tertiary: "#3C2A21",
        fourth: "#1A120B",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Merriweather"', "serif"],
        custom: ["CustomFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
