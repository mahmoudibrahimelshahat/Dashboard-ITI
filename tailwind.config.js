/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'lightorange': '#F66B0E',
        'lightgrey':'#727272',
        'bgcolor':'#EFEFEF'
        
      },
    },
  },
  plugins: [ require('tw-elements/dist/plugin')],

  
}
