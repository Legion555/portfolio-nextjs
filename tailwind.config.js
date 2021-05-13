module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'img-mobile': '300px',
        'img-desktop': '600px'
      },
      height: {
        'img-mobile': '168px',
        'img-desktop': '338px'
      }
    }
  },
  variants: {
    extend: {
      width: ['hover'],
      height: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
