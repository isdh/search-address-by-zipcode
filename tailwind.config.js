module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
