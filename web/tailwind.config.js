/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // primary blue
          dark: "#1e40af",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
