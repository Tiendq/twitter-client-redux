import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './search-result-item';
import styles from './search-result.scss';

const SearchResult = ({ keyword, tweets, keywordInput }) => {
  if ('' === keyword)
    return null;

  let summary = `Found ${tweets.length} tweets for "${keyword}"`;

  return (
    <Fragment>
      <div className="col-12">
        <p className={styles.searchSummary}>{summary}</p>
        {tweets.length > 0 && renderTweetList(tweets)}
      </div>
    </Fragment>
  );
}

const renderTweetList = tweets => {
  return (
    <ul className="list-group">
      {tweets.map(item => {
        let { id, ...rest } = item;
        return <li key={id} className="list-group-item"><SearchResultItem {...rest} /></li>
      })}
    </ul>
  );
}

SearchResult.propTypes = {
  keyword: PropTypes.string.isRequired,
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userImageUrl: PropTypes.string.isRequired
  }).isRequired).isRequired,
  keywordInput: PropTypes.object
}

export default SearchResult;
