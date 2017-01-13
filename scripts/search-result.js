import React from 'react';
import SearchResultItem from './search-result-item';
import '../scss/search-result.scss';

const SearchResult = ({ tweets }) => {
  return (
    <div>
      <p className="">Found 1234 tweets for "keyword"</p>
      <ul>
        {tweets.map(item => {
          let { id, ...rest } = item;
          return <li><SearchResultItem id={id} {...rest} /></li>
        })}
      </ul>
    </div>
  );
};

SearchResult.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    createdDate: React.PropTypes.number.isRequired,
    userName: React.PropTypes.string.isRequired,
    userImageUrl: React.PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default SearchResult;
