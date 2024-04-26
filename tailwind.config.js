/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7286D3",
        secondary: "#8EA7E9",
        tertiary: "#E5E0FF",
        fourth: "#FFF2F2",
      },
    },
  },
  plugins: [],
};
