/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      },
      backgroundColor: {
        "black-custom": "#181818",
        "primary-orange-bg": "#F19938"
      },
      colors: {
        "white-custom": "#E6FFF2",
        "primary-orange": "#F19938",
        "primary-hover": "#CC771A",
        "light-yellow": "#FFF4CF",
        "black-custom": "#181818"
      }
    },
  },
  plugins: [],
}

