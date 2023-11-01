/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      },
      backgroundImage: {
        "white-gradient": "linear-gradient(to right, #FFE99D, #FFFFFF)"
      },
      colors: {
        "white-custom": "#E6FFF2",
        "primary-orange": "#F19938",
        "primary-hover": "#F1BD37",
        "light-yellow": "#FFF4CF",
        "black-custom": "#181818",
        "off-yellow": "#F9FFEE",
        "pale-yellow": "#FFF4CF",
        "card-2-yellow": "#FFE99F"
      },
      boxShadow: {
        "custom-shadow": "0 4px 22px 0 rgba(0, 0, 0, 0.17)"
      }
  },
  plugins: [],
}
}

