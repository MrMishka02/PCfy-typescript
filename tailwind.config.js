/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '640px' },
      md: { max: '768px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
    },
    extend: {},
  },
  plugins: [],
}
