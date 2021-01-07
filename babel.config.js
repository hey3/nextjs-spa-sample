module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: false, displayName: true, preprocess: false }]],
}
