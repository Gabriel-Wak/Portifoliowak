/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
