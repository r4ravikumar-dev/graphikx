/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        darkBlue: "#007FFF",
        midBlue: "#87CEFA",
        lightBlue: "#F0F8FF",
        blue: "#2a93e8",
      },
      spacing: {},
      fontFamily: {
        ubuntu: "Ubuntu",
        playball: "Playball",
        playwrirte: "Playwrite IS",
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}