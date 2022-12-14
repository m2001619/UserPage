/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      padding: {
        'mainPadding': "20px",
      },
      margin: {
        'mainMargin': "20px"
      },
      colors: {
        'lightGrey': "rgb(238, 238, 238)",
        'grey': "#888",
        'localBlue': "#0075ff",
        'lightBlue': "#0d69d5",
        'localOrange': "#f59e0b",
        'localGreen': "#22c55e",
        'localRed': "#f44336"
      },
      animation: {
        'UpAndDown': 'UpDown .7s linear infinite',
      },
      keyframes: {
        UpDown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
