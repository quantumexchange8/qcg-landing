const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '390px',
      // => @media (min-width: 393px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'cus-lg': '1053px',
    },
    colors: {
      primary: '#1C7800',
      secondary: '#5CA346',
      current: 'currentColor',
      'white': '#ffffff',
      'red' : '#F00',
      'primary-50' : '#ECFFE6',
    }
  },
  plugins: [],
}

