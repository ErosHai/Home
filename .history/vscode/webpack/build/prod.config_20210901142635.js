const uglify = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')


module.exports = {
  plugins:[
    new uglify(),
  ]
}

module.exports = webpackMerge('base.config.js',{
  plugins:[
    new uglify(),
  ]
})