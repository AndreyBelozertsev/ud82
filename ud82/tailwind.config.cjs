/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1550px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px'
      },
    },
    extend: {
      colors: {
        springtimeRain: "#F8F9FB",
        philippineYellow: "#ffcb00",
        stoneColdGray: "#575656",
        carbonFiber: "#2d2d2d",
      }
    },
  },
  plugins: [],
}