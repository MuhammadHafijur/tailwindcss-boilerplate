/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5368FE",
        primaryText: "#293040",
        secondaryText: "#3B475C"
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
