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
        color1: "#222831",
        color2: "#393E46",
        color3: "#00ADB5",
        color4: "#EEEEEE",
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
