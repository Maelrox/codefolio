/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#002a45',
          600: '#01111a'
        },
        secondary: {
          100: '#9ca3af'
        },
        orange: '#f05133'
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to left, #f05133, #b52e14)',
        'main-gradient': 'linear-gradient(to left, #020202, #002a45)'
      },
    },
  },
  plugins: [],
};
