/ @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'Bright-Orange': 'hsl(31, 77%, 52%)',
      'Dark-Cyan': 'hsl(184, 100%, 22%)',
      'Very-Dark-Cyan': 'hsl(179, 100%, 13%)',
      'Transparent-White': 'hsl(0, 0%, 100%, 0.75)',
      'Very-Light-Gray': 'hsl(0, 0%, 95%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Lexend Deca', 'sans-serif'],
      serif: ['Big Shoulders Display', 'cursive']
    }
  },
  plugins: [],
}