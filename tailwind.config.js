/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Oswald' : ['Oswald','sans-serif'],
        'NunitoSans': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        whiteBg : "#EEF2F7"
      }
    },
    
  },
  plugins: [],
}

