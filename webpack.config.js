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
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
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
