/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#1f1e1e",
        DarkGray: "#353434"
      },
    },
  },
  plugins: [],
}