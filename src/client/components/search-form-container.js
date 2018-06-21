import React from 'react';
import { connectAdvanced } from 'react-redux';
import { sendSearchRequest } from '../actions';
import SearchForm from './search-form';

const SearchFormContainer = connectAdvanced(selectorFactory)(SearchForm);

function selectorFactory(dispatch) {
  return (nextState, nextOwnProps) => ({
    forwardedRef: nextOwnProps.forwardedRef,
    startSearch(keyword) {
      let w = keyword.trim();

      if (w.length > 0)
        dispatch(sendSearchRequest(w));
    }
  });
}

// connect doesn't accept React.forwardRef return.
// More detail: https://github.com/reduxjs/react-redux/issues/914#issuecomment-377421145
export default React.forwardRef((props, ref) => <SearchFormContainer {...props} forwardedRef={ref} />);
