/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      "figtree":"Figtree", "sans-serif"
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

