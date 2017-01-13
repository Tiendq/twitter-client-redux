import { connect } from 'react-redux';
import SearchForm from './search-form';

const mapStateToProps = (state) => ({
  isNoResult: 0 === state.tweets.length
});

const mapDispatchToProps = (dispatch) => ({
  startSearch(keyword) {
  }
});

const SearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
export default SearchFormContainer;
