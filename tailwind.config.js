/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans'],
    },
    extend: {
      colors: {
        background: 'rgba(40, 40, 40, <alpha-value>)',
        'on-background': 'rgba(255, 255, 255, <alpha-value>)',
      },
      data: {
        open: 'open=true',
      },
    },
  },
  plugins: [],
}
