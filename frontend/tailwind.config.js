/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E3232",
        secondary: "#503C3C",
        tertiary: "#7E6363",
        fourth: "#A87C7C",
      },
    },
  },
  plugins: [],
};
