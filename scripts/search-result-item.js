import React from 'react';
import '../scss/search-result-item.scss';

const SearchResultItem = ({ text, createdDate, userName, userImageUrl }) => {
  let className = 'status-banner alert';
  return (
    <div className="search-result-item">
      <img src={userImageUrl} className="profile-image" alt={userName} />
      <div>
        <p><span>{userName}</span><span>{createdDate.toString()}</span></p>
        <p>{text}</p>
      </div>
    </div>
  );
};

SearchResultItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  createdDate: React.PropTypes.number.isRequired,
  userName: React.PropTypes.string.isRequired,
  userImageUrl: React.PropTypes.string.isRequired
};

export default SearchResultItem;
