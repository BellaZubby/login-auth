/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-20": "#48AAAD",
        "primary-50": "#2C3E4C",
        "primary-100": "#022D36",
        "gray-20": "#708090"
      },
       fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "700px",
      md: "1060px"
    }
  },
  plugins: [],
}