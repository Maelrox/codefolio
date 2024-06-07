/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#E2E2E2',
        },
        pastelPink: '#f8e8f0',
        pastelPurple: '#f0e8f6',
        pastelGray: '#f1f1f2',
        lightGray: '#e8e8e8',
        whiteish: '#f9f9f9',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom, #F9F9F9, #FFFFFF)',
      },
    },
  },
  plugins: [],
};
