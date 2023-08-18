/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./views/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elf-green': {
          '50': '#edfcf5',
          '100': '#d4f7e4',
          '200': '#aceecf',
          '300': '#76dfb3',
          '400': '#3fc893',
          '500': '#1cad7a',
          '600': '#109569',
          '700': '#0c7052',
          '800': '#0c5941',
          '900': '#0b4938',
          '950': '#05291f',
        },      
      }
    },
  },
  plugins: [],
}

