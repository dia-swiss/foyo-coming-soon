module.exports = {
  mode: 'jit',
  content: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'qoyo-pink': '#EA0065',
        'qoyo-blue': '#08869E',
        'qoyo-gray': '#E0E9E9'
      }
    },
  },
  plugins: [],
}
