/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        'black-opacity-90': 'rgba(0, 0, 0, 0.9)',
        'white-opacity-8': 'rgba(255, 255, 255, 0.08)',
        'white-opacity-10': 'rgba(255, 255, 255, 0.1)',
        'white-opacity-11': 'rgba(255, 255, 255, 0.11)',
        'white-opacity-12': 'rgba(255, 255, 255, 0.12)',
        'white-opacity-15': 'rgba(255, 255, 255, 0.15)',
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}