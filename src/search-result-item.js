import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-result-item.scss';

const SearchResultItem = ({ text, createdDate, userName, userImageUrl }) => {
  return (
    <div className={styles.searchResultItem}>
      <img src={userImageUrl} className={styles.profileImage} alt={userName} />
      <div className={styles.itemContent}>
        <p><span className={styles.username}>{userName}</span>&nbsp;<span className={styles.createdDate}>{createdDate}</span></p>
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
