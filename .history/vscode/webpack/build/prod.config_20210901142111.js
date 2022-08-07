const uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins:[
    new uglify(),
  ]
}