var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,  
  inline: true,  
  stats: { colors: true },  
  contentBase: 'publice/', 
  historyApiFallback: true,
  hot: true, 
  proxy: {
    '*': 'http://localhost:3000' // proxy requests for the external API server
  }
}).listen(9000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:9000/');
});
