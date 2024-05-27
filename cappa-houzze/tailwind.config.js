/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A79277",
        secondary: "#D1BB9E",
        tertiary: "#EAD8C0",
        fourth: "#FFF2E1",
      },
    },
  },
  plugins: [],
};
