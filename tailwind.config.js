/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blurple': '#5865f2',
        'primary-alt-blurple': '#4a56d9',
        'ancent': '#4f545c',
        'ternary': '#202225',
      },
      textColor: {
        link: '#00b0f4',
        primary: '#fff'
      },
      backgroundColor: {
        'primary': '#15171e',
        'secondary': '#262a33',
        'secondary-alt': '#15171d',
      },
      padding: {
        'container': '16'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}