import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as reducers from './src/reducers';
import TwitterApp from './src/twitter-app';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure redux-devtools: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}><TwitterApp /></Provider>, document.getElementById('root'));
