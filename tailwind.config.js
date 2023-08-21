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
        'earth-kingdom-green': {
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
        'water-tribe-blue': {
          '50': '#f2f6fc',
          '100': '#e1ecf8',
          '200': '#caddf3',
          '300': '#a5c8eb',
          '400': '#78a9df',
          '500': '#5b8dd6',
          '600': '#4774c9',
          '700': '#3d60b8',
          '800': '#375096',
          '900': '#314577',
          '950': '#212c4a',
      },
          
      }
    },
  },
  plugins: [],
}

