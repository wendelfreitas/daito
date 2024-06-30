/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './.storybook/preview.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecf1ff',
          100: '#dde5ff',
          200: '#c2d0ff',
          300: '#9cafff',
          400: '#7584ff',
          500: '#4d53ff',
          600: '#3f36f5',
          700: '#352ad8',
          800: '#2b25ae',
          900: '#282689',
          950: '#191650',
        },
      },
    },
  },
  plugins: [],
};
