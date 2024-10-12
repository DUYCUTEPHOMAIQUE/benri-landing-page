/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'benri-green': {
          50: '#f0faf5',
          100: '#d1f1e0',
          200: '#a3e3c1',
          300: '#75d5a2',
          400: '#54C392', // Primary color
          500: '#3ba97a',
          600: '#2d8f62',
          700: '#1f754a',
          800: '#115c32',
          900: '#03421a',
        },
      },
    },
  },
  plugins: [],
}