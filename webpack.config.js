var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  devtool: 'eval-source-map',
  [
    'webpack-hot-middleware/client',
    path.join(__dirname,  APP_DIR +  'app/main.js')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }, {
        test: /\.css?$/,
        loader: 'style!css' // This are the loaders
      }
    ]
  }
};

module.exports = config;