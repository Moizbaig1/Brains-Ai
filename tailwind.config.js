/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mona: ["MonaSans", "sans-serif"],
        varino: ["Varino", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
