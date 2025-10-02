/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4dd',
          300: '#d9d2c5',
          400: '#c7bdaa',
          500: '#b5a68f',
          600: '#a08f73',
          700: '#8a7a5f',
          800: '#6d5f4c',
          900: '#504439',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf6ed',
          300: '#f6f0e2',
          400: '#f1e9d5',
          500: '#ebe1c7',
          600: '#e4d8b8',
          700: '#dccfa7',
          800: '#d3c595',
          900: '#c9b982',
        },
        accent: {
          50: '#f7f6f4',
          100: '#eeede8',
          200: '#ddd9d0',
          300: '#c9c2b4',
          400: '#b3a894',
          500: '#9d8e72',
          600: '#8a7a5f',
          700: '#73654e',
          800: '#5c513e',
          900: '#453d2f',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
