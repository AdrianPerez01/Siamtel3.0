/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#90EE90",
        secondary: {
          100: "#FFFFFF",
          900: "#EDEDEE",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
