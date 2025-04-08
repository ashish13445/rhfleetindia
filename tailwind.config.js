// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#08016C',
      },
    },
    keyframes: {
      fillText: {
        '0%': { 'background-position': '100% 0' },
        '100%': { 'background-position': '0 0' },
      },
      gradientSlide: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
    animation: {
      fillText: 'fillText 8s ease forwards',
      gradientSlide: 'gradientSlide 3s ease infinite',

    },

  },
  plugins: [],
}