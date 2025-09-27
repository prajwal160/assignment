/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class", // for dark/light mode toggle
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // we control dark mode with a class on <html>
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f2ff",
          100: "#cfe6ff",
          500: "#0B63D4", // main blue
          700: "#064b9e"
        },
        accent: "#2F8FF7",
        neon: "#48F5FF"
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(2,6,23,0.45)'
      }
    }
  },
  plugins: []
};
