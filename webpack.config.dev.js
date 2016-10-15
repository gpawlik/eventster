var path = require('path');
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: '/js',
    filename: 'main.js'    
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /* ExtractTextPlugin not compatible with Hot Replacement Plugin - use rather in prod
    new ExtractTextPlugin('public/styles/main.css', {
      allChunks: true
    })*/
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'app')      
    },  
    {
      test: /\.scss$/,
      //loader: ExtractTextPlugin.extract('!css!sass?sourceMap'),
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }
    ]
  }
};
