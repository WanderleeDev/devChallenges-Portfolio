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
        'blueBar' : '#2F80ED',
        'letterGray' : '#828282'
      },
      fontFamily:{
        'Montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage:{
        'keyboard-arrow' : "url('/src/img/keyboard-right-arrow.svg')"
      }
    },
  },
  plugins: [],
}

