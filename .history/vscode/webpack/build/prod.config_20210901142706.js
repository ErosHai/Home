const uglify = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig - require('./base.config')

module.exports = webpackMerge('base.config.js',{
  plugins:[
    new uglify(),
  ]
})