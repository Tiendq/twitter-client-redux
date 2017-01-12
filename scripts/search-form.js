import React from 'react';
import '../scss/search-form.scss';

let keywordElement = null;

const SearchForm = ({ startSearch }) => {
  return (
    <form className="form-inline row" onSubmit={() => startSearch(keywordElement.value)}>
      <div className="col-xs-12">
        <input type="text" ref={input => keywordElement = input} className="form-control" placeholder="Search for a topic, full name, or @username" />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  startSearch: React.PropTypes.func.isRequired
};

export default SearchForm;
