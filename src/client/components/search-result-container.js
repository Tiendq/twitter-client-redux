import { connect } from 'react-redux';
import SearchResult from './search-result';

const mapStateToProps = (state, ownProps) => ({
  keyword: state.keyword,
  tweets: state.tweets,
  keywordInput: ownProps.keywordInput.current
});

const SearchResultContainer = connect(mapStateToProps)(SearchResult);

export default SearchResultContainer;
