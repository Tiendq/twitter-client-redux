let path = require('path');
let webpack = require('webpack');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'main.css'
});

let scssLoaders = [{
  loader: 'css-loader',
  options: {
    modules: true,
    camelCase: true,
    minimize: 'production' === process.env.NODE_ENV,
    importLoaders: 1,
    localIdentName: '[local]-[hash:base64:5]'
  }
}, 'sass-loader'];

let plugins = [
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  mode: process.env.NODE_ENV,
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
      use: 'production' === process.env.NODE_ENV ? [MiniCssExtractPlugin.loader, ...scssLoaders] : ['style-loader', ...scssLoaders],
      exclude: /node_modules/
    }]
  },
  entry: [
    'babel-polyfill',
    './src/client/index.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: '/dist/client'
  },
  plugins: 'production' === process.env.NODE_ENV ? [...plugins, miniCssExtractPlugin] : plugins,
  devtool: 'source-map'
}
