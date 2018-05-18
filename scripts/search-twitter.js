let config = require('./config');
let twitter = require('./twitter-client');

let accessToken = '';

function search(keyword) {
  if (accessToken) {
    return twitter.searchTwitter(accessToken, keyword).then(result => reduceData(result.statuses));
  } else {
    return twitter.getBearerToken(config.CONSUMER_KEY, config.CONSUMER_SECRET).then(response => {
      if ('bearer' === response.token_type) {
        accessToken = response.access_token;
        return twitter.searchTwitter(accessToken, keyword).then(result => reduceData(result.statuses));
      } else {
        throw new Error('No access token');
      }
    });
  }
}

function reduceData(statuses) {
  return statuses.map(status => ({
    id: status.id_str,
    text: status.text,
    createdDate: status.created_at,
    userName: status.user.name,
    userImageUrl: status.user.profile_image_url
  }));
}

module.exports = {
  search
};
