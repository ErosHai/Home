const uglify = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./dev.config.js')

module.exports = webpackMerge('baseConfig',{
  devServer:{
    contentBase:'./dist',
    inline:true
  }
})
