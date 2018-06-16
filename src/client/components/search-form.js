import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './search-form.scss';

let keywordElement = null;

const SearchForm = ({ startSearch }) => {
  return (
    <form className={classNames('col-12', styles.searchForm)} onSubmit={event => {
      event.preventDefault();
      startSearch(keywordElement.value);
    }}>
      <div className={styles.formGroup}>
        <input type="text" ref={input => keywordElement = input} className="form-control" maxLength="500" placeholder="Search for a topic, full name, or @username" />
        <button type="submit" className="btn btn-success">Search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  startSearch: PropTypes.func.isRequired
};

export default SearchForm;
