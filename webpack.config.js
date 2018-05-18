let webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
  devtool: 'source-map'
};
