let fetch = require('isomorphic-fetch');
let base64 = require('base-64');

function getBearerToken(consumerKey, consumerSecret) {
  let encodedKeys = base64.encode(consumerKey + ':' + consumerSecret);

  // Successful responses include a JSON-structure describing the awarded Bearer Token.
  // Tokens received by this method should be cached. If attempted too frequently,
  // requests will be rejected with a HTTP 403 with code 99.
  // https://dev.twitter.com/oauth/reference/post/oauth2/token
  return fetch('https://api.twitter.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + encodedKeys,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
  }).then(response => {
    if (response.status >= 400)
      throw new Error('Bad response from server.');

    return response.json();
  }).then(json => 'bearer' === json.token_type ? json.access_token : '');
}

function searchTwitter(token, keyword) {
  return fetch('https://api.twitter.com/1.1/search/tweets.json?q=' + encodeURIComponent(keyword), {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }).then(response => response.json());
}

module.exports = {
  getBearerToken,
  searchTwitter
};
