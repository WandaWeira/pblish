/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#202022",
        customWhite: "#FCFCFC",
        customSmokeWhite: "#EEEEEE",
        darkGray: "#9E9E9E",
        tangerineYellow: "#FFC907"
      },
      
    },
  },
  plugins: [],
}

