module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'gray-800': '#2D3748',
        'purple-700': '#6B46C1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
