/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        customInner: 'inset 0 0 50px #031306', // Custom inner shadow
      },
    },
  },
  plugins: [],
};
