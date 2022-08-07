const uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins:[
    new webpack.BannerPlugin(`
        * Vue.js v2.6.14
        * (c) 2014-2021 Evan You
        * Released under the MIT License.
    `),
    new Html({
      template:'index.html'
    }),
    new uglify(),
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
}