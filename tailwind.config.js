module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,jsx}', './src/ui/**/*.{js,jsx}', './src/features/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1E3151',
        accent: '#EAEAEA',
        alt1: '#0A172B',
        alt2: '#164487',
      },
    },
  },
  variants: {
    extend: {},
  },
};
