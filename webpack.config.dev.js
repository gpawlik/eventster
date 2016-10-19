import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/app/index.js'),
    output: {
    path: '/' // no need to specify, webpack will load it in memory   
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel'
      },  
      {
        test: /\.scss$/,      
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
