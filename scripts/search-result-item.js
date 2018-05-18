import React from 'react';
import PropTypes from 'prop-types';
import '../scss/search-result-item.scss';

const SearchResultItem = ({ text, createdDate, userName, userImageUrl }) => {
  return (
    <div className="search-result-item">
      <img src={userImageUrl} className="rounded profile-image" alt={userName} />
      <div className="item-content">
        <p><span className="username">{userName}</span>&nbsp;<span className="created-date">{createdDate}</span></p>
        <p>{text}</p>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  text: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userImageUrl: PropTypes.string.isRequired
};

export default SearchResultItem;
