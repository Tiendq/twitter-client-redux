import React from 'react';
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
  text: React.PropTypes.string.isRequired,
  createdDate: React.PropTypes.string.isRequired,
  userName: React.PropTypes.string.isRequired,
  userImageUrl: React.PropTypes.string.isRequired
};

export default SearchResultItem;
