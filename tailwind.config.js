/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
      colors: {
        primary: "#1b0707",
        secondary: "#200909",
        third: "#230606",
        text: "#4f0d0d",
        // text: "#230623",
      },
    },
  },
  plugins: [],
};
