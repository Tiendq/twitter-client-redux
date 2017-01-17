# twitter-client-redux
A [Redux async action](http://redux.js.org/docs/advanced/AsyncActions.html) example: searching Twitter.

[Twitter REST APIs](https://dev.twitter.com/rest/public)

![Demo](./demo.png)

## How to start

`yarn install`

`yarn run start` to start an Express server at `http://localhost:8080` (~~[nodemon](https://github.com/remy/nodemon) is utilized for its live loading feature~~).

Update: [HMR doesn't work](https://github.com/mech/Notes/blob/master/JavaScript/React/webpack.md) with `nodemon` so I used `node` as usual.

## Configuration

In order to run this application locally you need to [create a Twitter application](https://apps.twitter.com/app/new) in your own Twitter account then provide valid `CONSUMER_KEY` and `CONSUMER_SECRET` in `config.js`

Tien Do.
