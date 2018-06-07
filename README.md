# twitter-client-redux

A [Redux async action](http://redux.js.org/docs/advanced/AsyncActions.html) example to search Twitter with [Twitter REST APIs](https://dev.twitter.com/rest/public)

[![Build Status](https://travis-ci.com/Tiendq/twitter-client-redux.svg?branch=master)](https://travis-ci.com/Tiendq/twitter-client-redux) [![Greenkeeper badge](https://badges.greenkeeper.io/Tiendq/twitter-client-redux.svg)](https://greenkeeper.io/)

![Demo](./demo.png)

## Features

- Redux async action
- Twitter REST APIs
- ~~CSS module~~
- ~~Redux-router~~

## How to Start

`yarn install`

`yarn test`

`yarn start` to start an Express server at `http://localhost:8080` with [HMR](https://webpack.js.org/concepts/hot-module-replacement/) ([nodemon](https://github.com/remy/nodemon) is utilized for its live loading feature).

## Configuration

In order to run this application locally you need to [create a Twitter application](https://apps.twitter.com/app/new) in your own Twitter account then provide valid `CONSUMER_KEY` and `CONSUMER_SECRET` in `.env` file.

## Resources

- [Introduction to Redux](http://devguides.io/redux/)
- [Redux Official Documentation](https://redux.js.org/)

&copy;2018 [Tien Do](https://github.com/tiendq)

MIT License.
