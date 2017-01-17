import React from 'react';
import SearchResultItem from './search-result-item';
import '../scss/search-result.scss';

const SearchResult = ({ keyword, tweets }) => {
  if ('' === keyword)
    return null;

  let summary = `Found ${tweets.length} tweets for "${keyword}"`;

  return (
    <div className="search-result">
      <p className="search-summary">{summary}</p>
      {tweets.length > 0 && renderTweetList(tweets)}
    </div>
  );
};

const renderTweetList = tweets => {
  return (
    <ul className="list-group">
      {tweets.map(item => {
        let { id, ...rest } = item;
        return <li key={id} className="list-group-item"><SearchResultItem {...rest} /></li>
      })}
    </ul>
  );
};

SearchResult.propTypes = {
  keyword: React.PropTypes.string.isRequired,
  tweets: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    createdDate: React.PropTypes.string.isRequired,
    userName: React.PropTypes.string.isRequired,
    userImageUrl: React.PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default SearchResult;
