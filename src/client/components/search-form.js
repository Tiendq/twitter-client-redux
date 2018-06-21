import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './search-form.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }
  }
  render() {
    return (
      <form className={classNames('col-12', styles.searchForm)} onSubmit={this.handleFormSubmit}>
        <div className={styles.formGroup}>
          <input type="text"
            ref={this.props.forwardedRef}
            className="form-control" maxLength="50"
            placeholder="Search for a topic, full name, or @username"
            value={this.state.keyword}
            onChange={this.handleKeywordChange}
          />
          <button type="submit" className="btn btn-success">Search</button>
        </div>
      </form>
    )
  }
  handleKeywordChange = (event) => {
    this.setState({ keyword: event.target.value });
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.startSearch(this.state.keyword);
  }
}

SearchForm.propTypes = {
  startSearch: PropTypes.func.isRequired,
  forwardedRef: PropTypes.object.isRequired
}

export default SearchForm;
