// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// vue.config.js

module.exports = {
  devServer: {
    proxy: {
      '/epayment': {
        target: 'https://a.khalti.com',
        changeOrigin: true
      }
    }
  }
}
