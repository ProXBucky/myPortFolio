/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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
