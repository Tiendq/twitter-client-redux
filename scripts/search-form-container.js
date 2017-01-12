import { connect } from 'react-redux';
import SearchForm from './search-form';

const mapDispatchToProps = (dispatch) => ({
  startSearch(keyword) {
  }
});

const SearchFormContainer = connect(mapDispatchToProps)(SearchForm);
export default SearchFormContainer;
