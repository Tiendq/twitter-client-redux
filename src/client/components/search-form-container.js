import { connect } from 'react-redux';
import { sendSearchRequest } from '../actions';
import SearchForm from './search-form';

const mapDispatchToProps = (dispatch) => ({
  startSearch(keyword) {
    let w = keyword.trim();

    if (w.length > 0)
      dispatch(sendSearchRequest(w));
  }
});

const SearchFormContainer = connect(null, mapDispatchToProps)(SearchForm);

export default SearchFormContainer;
