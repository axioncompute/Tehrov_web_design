/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F4F7F4',
          100: '#E8F0E9',
          200: '#D5E2D7',
          500: '#22C55E',
          600: '#166534',
          700: '#14532D',
          800: '#12221A',
          900: '#0E1B14',
          950: '#0B1510',
        },
        ambercta: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
      },
    },
  },
  plugins: [],
};