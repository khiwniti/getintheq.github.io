/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'rgba(17, 24, 39, 0.85)', // Translucent dark background
          card: 'rgba(31, 41, 55, 0.75)', // Translucent card background
          hover: 'rgba(55, 65, 81, 0.65)' // Translucent hover state
        }
      },
      backgroundColor: {
        'dark-gradient-start': 'rgba(31, 41, 55, 0.85)',
        'dark-gradient-end': 'rgba(17, 24, 39, 0.85)',
      },
      borderColor: {
        'dark-border': 'rgba(55, 65, 81, 0.3)',
      },
      textColor: {
        'dark-primary': '#F9FAFB',
        'dark-secondary': '#D1D5DB',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
