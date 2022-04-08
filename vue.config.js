// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

module.exports = {
  publicPath: './',
  pages:{
    index:{
      entry: 'srv/main.js',
      title: '小平头',
    }

  }
}
