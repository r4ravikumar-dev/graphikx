/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#25219c",
        white: "#ffffff",
        black: "#000000",
        darkBlue: "#001d54",
        lightBlue: "#96c3f7",
        slateblue: "#1f5db3",
        blue: "#2a93e8",
        red: "#f4312f",
        green: "#28a745",
        gray: {
          default: "#343a40",
          light: "#f8f9fa",
          dark: "#212529",
          muted: "#868e96",
          "100": "#646464", 
          "200": "#575757" ,
          normal: "#1e1e1e"
        }
      },
      spacing: {},
      fontFamily: {
        ubuntu: "Ubuntu",
        playball: "Playball"
      },
    },
  },
  plugins: [],
}