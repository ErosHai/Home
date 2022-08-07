const path = require('path')

module.exports = {
  entry :'./main.js',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: 'dist/'
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
            },
            name: {
              
            }
          }
        ]
      }
    ]
  }
}