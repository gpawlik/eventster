import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

process.env.NODE_ENV = 'development';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/app/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'public'), // no need to specify, webpack will load it in memory 
    publicPath: '/public/',
    filename: 'main.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(), // manages errors in cleaner way
    new webpack.optimize.OccurenceOrderPlugin(), // order of build hashes
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    }),
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
        loaders: ['style', 'css?postcss-loader', 'sass?sourceMap']
      }
    ]
  }, 
  postcss: [
    autoprefixer(),
  ],
  resolve: {
    extensions: ['', '.js', '.scss']
  }
};
