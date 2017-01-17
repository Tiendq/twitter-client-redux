let path = require('path');
let express = require('express');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackConfig = require('./webpack.config');
let searchTwitter = require('./scripts/search-twitter');

let compiler = webpack(webpackConfig);
let app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// e.g. /search?q=reactjs
app.get('/search', (request, response) => {
  if (request.query.q && request.query.q.length > 0) {
    console.log('Searching for ' + request.query.q);

    searchTwitter.search(request.query.q)
      .then(result => response.json(result))
      .catch(error => response.status(403).end());
  } else {
    response.json([]);
  }
});

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, 'localhost', error => {
  if (error)
    console.log(error);

  console.log('Listening at http://localhost:8080');
});
