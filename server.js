let path = require('path');
let express = require('express');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let config = require('./webpack.config');

let compiler = webpack(config);
let app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (reqest, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, 'localhost', error => {
  if (error)
    console.log(error);

  console.log('Listening at http://localhost:8080');
});
