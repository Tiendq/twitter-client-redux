import React from 'react';
import '../scss/search-form.scss';

let keywordElement = null;

const SearchForm = ({ isNoResult, startSearch }) => {
  let className = 'col-xs-12 form-inline search-form' + (isNoResult ? '' : ' empty');

  return (
    <form className={className} onSubmit={() => startSearch(keywordElement.value)}>
      <div className="form-group">
        <input type="text" ref={input => keywordElement = input} className="form-control" maxLength="500" placeholder="Search for a topic, full name, or @username" />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  isNoResult: React.PropTypes.bool.isRequired,
  startSearch: React.PropTypes.func.isRequired
};

export default SearchForm;
