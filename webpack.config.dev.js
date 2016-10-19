import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/app/index.js'),
  ],
  output: {
    path: '/', // no need to specify, webpack will load it in memory 
    publicPath: '/js',
    filename: 'main.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(), // manages errors in cleaner way
    new webpack.optimize.OccurenceOrderPlugin(), // order of build hashes
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'app'),
          path.join(__dirname, 'server/shared'),
        ],
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
