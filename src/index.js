let path = require('path');
let express = require('express');
let config = require('dotenv-safe').config(); // eslint-disable-line

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './client/reducers';
import TwitterApp from './client/components/twitter-app';

let searchTwitter = require('./search-twitter');

let app = express();

app.use('/dist', express.static('dist', { index: false }));

// e.g. /search?q=reactjs
app.get('/search', (request, response) => {
  if (request.query.q && request.query.q.length > 0) {
    console.log('Searching for ' + request.query.q);

    searchTwitter.search(request.query.q)
      .then(result => response.json(result))
      .catch(error => response.sendStatus(403)); // eslint-disable-line
  } else {
    response.json([]);
  }
});

app.get('/', (request, response) => {
  if ('development' === process.env.NODE_ENV)
    return response.sendFile(path.join(__dirname, '../index.html'));

  let store = createStore(combineReducers(reducers));
  let html = renderToString(<Provider store={store}><TwitterApp /></Provider>);
  let preloadedState = store.getState();

  response.send(renderFullPage(html, preloadedState));
});

app.listen(8080, 'localhost', error => {
  if (error)
    console.log(error);
  else
    console.log('Listening at http://localhost:8080');
});

function renderFullPage(html, state) {
  return (
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>twitter-client-redux</title>
        <meta name="description" content="twitter-client-redux">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" rel="stylesheet">
        <link href="/dist/client/main.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/client/main.js"></script>
      </body>
    </html>`
  );
}
