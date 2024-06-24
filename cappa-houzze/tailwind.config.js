/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFCF3",
        secondary: "#F5EBE0",
        tertiary: "#F0DBDB",
        fourth: "#DBA39A",
      },
    },
  },
  plugins: [],
};
