/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '767px', 'min': '320px' }, // width < 768 and width >= 320
        'md': { 'max': '1023px', 'min': '768px' }, // width < 1024 and width >= 768
        'lg': { 'max': '1279px', 'min': '1024px' }, // width >= 1024
        'xl': { 'min': '1280px' }, // width >= 1024
      },
      animation: {
        'logo-spin': 'spin infinite 5s linear',
      },
      keyframes: {
        spin: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        }
      }
    },
  },
  plugins: []
}


// @keyframes logo - spin {
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// }

// @media(prefers - reduced - motion: no - preference) {
//   .react - logo {
//     animation: logo - spin infinite 20s linear;
//   }
// }
