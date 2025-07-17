/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEFF",
        secondary: "#149da3",
        black: "#272D2D",
        white: "#EEEEFF",
        lightBlue: "#149da3",
        purple: "#6969B3",
        green: "#9CE37D"
      }
    },
  },
  plugins: [],
}
