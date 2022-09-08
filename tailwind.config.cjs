/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
      White: "hsl(0, 0%, 100%)",
      LightGrayishViolet: "hsl(270, 3%, 87%)",
      DarkGrayishViolet: "hsl(279, 6%, 55%)",
      VeryDarkViolet:" hsl(278, 68%, 11%)"
      }
    },
  },
  plugins: [],
}
