const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            montserrat: "'Montserrat', sans-serif",
            poppins: "'Poppins', sans-serif",
            serif: ['PT Serif', ...defaultTheme.fontFamily.serif],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
