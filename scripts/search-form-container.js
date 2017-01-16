import { connect } from 'react-redux';
import { sendSearchRequest } from './actions';
import SearchForm from './search-form';

const mapStateToProps = (state) => ({
  isNoResult: 0 === state.tweets.length
});

const mapDispatchToProps = (dispatch) => ({
  startSearch(keyword) {
    if (keyword.length > 0)
      dispatch(sendSearchRequest(keyword));
  }
});

const SearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
export default SearchFormContainer;
