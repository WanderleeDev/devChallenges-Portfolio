/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html}"
  ],
  theme: {
    extend: {
      screens:{
        'xs' : '300px' 
      },
      colors:{
        'blueBar' : '#2F80ED'
      }
    },
  },
  plugins: [],
}

