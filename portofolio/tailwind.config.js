/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/js/*.{js}"],
  theme: {
    extend: {
      colors:{
        'custom-color' : '#232946',
        'ct-font-color' : '#b8c1ec',
        'ct-main-color' : '#b8c1ec',
      },
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

