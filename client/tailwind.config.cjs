/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#18181A',
        'dark-black': '#111113',
        'dark-blurple': '#4a56d9',
        'light-blurple': '#5865f2',
        'grey': '#D4D3D8',
        'ancent-black': '#1F1F27',
      },
      padding: {
        'container': '16'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Kanit': ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}