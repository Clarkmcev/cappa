/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3250",
        secondary: "#424769",
        tertiary: "#7077A1",
        fourth: "#F6B17A",
      },
    },
  },
  plugins: [],
};
