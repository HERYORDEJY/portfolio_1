/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors:{
      primaryColor: '#FFFFFF',
      cardColor: '#2A2A2A',
      backgroundColor: '#161513',
      headerBackgroundColor: '#222222',
      blueGradientStart: '#5BADFF',
      blueGradientStop: '#1373D1',
      primaryGradientStart: '#FF8660',
      primaryGradientStop: '#9A33FF',
      orangeGradientStart: '#FF8660',
      orangeGradientStop: '#D5491D',
      secondaryText: '#C5C5C5',
      transparent: 'transparent'
    }
  },
  plugins: [
    tailwindcssAnimate
  ],
}

