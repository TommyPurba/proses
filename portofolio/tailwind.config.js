/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/js/*.{js}"],
  theme: {
    extend: {
      colors:{
        'custom-color' : '#232946',
        'ct-font-color' : '#b8c1ec',
        'ct-blur-bg' : '#121629',
        'ct-bg-cl' : '#eebbc3',
      },
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily:{
        'rub' : ['Rubik Iso', 'cursive'],
      }
    },
  },
  plugins: [],
}

