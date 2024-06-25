const { theme, plugins } = require('../../packages/ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './app/**/*.{html,js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme,
  plugins,
};
