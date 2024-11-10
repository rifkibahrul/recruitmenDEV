/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: "#1e293b",
        bright: "#0891b2",
        secondary: "#71717a",
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
};
