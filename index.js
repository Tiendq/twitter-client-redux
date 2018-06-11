import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from './src/reducers';
import TwitterApp from './src/twitter-app';

// Configure redux-devtools: https://github.com/zalmoxisus/redux-devtools-extension
let store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}><TwitterApp /></Provider>, document.getElementById('root'));
