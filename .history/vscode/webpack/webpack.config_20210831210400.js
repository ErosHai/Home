const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')
const ugig = require('uglifyjs-webpack-plugin')

module.exports = {
  entry :'./main.js',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    // publicPath: 'dist/'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [ 
          { loader: "style-loader" },
          { loader: "css-loader" }        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }
       ] 
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 15000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:{
          loader:'vue-loader'
        }
      }
    ]
  },
  resolve:{
    extensions:['.js','.css','.vue'],
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin(`
        * Vue.js v2.6.14
        * (c) 2014-2021 Evan You
        * Released under the MIT License.
    `),
    new Html({
      template:'index.html'
    }),

  ]
}