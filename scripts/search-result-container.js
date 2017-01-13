import { connect } from 'react-redux';
import SearchResult from './search-result';

const mapStateToProps = (state) => ({
  tweets: state.tweets
});

const SearchResultContainer = connect(mapStateToProps)(SearchResult);
export default SearchResultContainer;
