/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        18: '4.5rem',
        19: '4.75rem',
        21:'5.5rem',
        22: '5.75rem',
      },
      width: {
        18: '4.5rem',
        19: '4.75rem',
        21:'5.5rem',
        22: '5.75rem',
      },
      spacing: {
        'xxs': '0.125rem', // tương đương 2px
        'xss': '0.1875rem'
      }
    },
  },
  plugins: [],
}