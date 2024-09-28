/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EDDFE0",
        secondary: "#F5F5F7",
        tertiary: "#B7B7B7",
        fourth: "#705C53",
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
