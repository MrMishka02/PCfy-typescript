/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '640px' },
      md: { max: '768px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      smMin: { min: '641px' },
      mdMin: { min: '768px' },
      xlMin: { min: '1280px' },
      lgMin: { min: '1024px' },
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue'],
      },
    },
  },
  plugins: [],
}
