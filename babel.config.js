const debug = process.env.NODE_ENV !== 'production'

const commonPlugins = [
  ['import', {
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
  }, 'vant']
]

const productionPlugins = [
  ['transform-remove-console', { 'exclude': ['error', 'warn'] }]
]

const developmentPlugin = []

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: debug ? [...commonPlugins, ...developmentPlugin] : [...commonPlugins, ...productionPlugins]
}
