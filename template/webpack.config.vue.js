const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
