let webpack = require('webpack');

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './index.js'
  ],
  output: {
    filename: 'index.js',
    path: __dirname + '/build',
    publicPath: '/build' // Must exist for HMR
  },
  sassLoader: {
    sourceMap: true,
    sourceComments: true,
    outputStyle: 'expanded'
  },
  devtool: 'source-map'
};
