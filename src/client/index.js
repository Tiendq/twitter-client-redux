import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from './reducers';
import TwitterApp from './components/twitter-app';

let preloadedState = window.__PRELOADED_STATE__;
let middlewares = composeWithDevTools(applyMiddleware(thunk, logger));

if (preloadedState) {
  // Configure redux-devtools: https://github.com/zalmoxisus/redux-devtools-extension
  let store = createStore(combineReducers(reducers), preloadedState, middlewares);
  ReactDOM.hydrate(<Provider store={store}><TwitterApp /></Provider>, document.getElementById('root'));
} else {
  let store = createStore(combineReducers(reducers), middlewares);
  ReactDOM.render(<Provider store={store}><TwitterApp /></Provider>, document.getElementById('root'));
}
