import fetch from 'isomorphic-fetch';

// In Redux action creators simply return an action.
// http://redux.js.org/docs/basics/Actions.html
export const START_SEARCH = 'START_SEARCH';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

const startSearch = (keyword) => ({
  type: START_SEARCH,
  keyword
});

const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  error
});

const searchSuccess = (result) => ({
  type: SEARCH_SUCCESS,
  result
});

// Meet our first thunk action creator!
const sendSearchRequest = (keyword) => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  let action = (dispatch) => {
    dispatch(startSearch(keyword));

    return fetch('/search?q=' + encodeURIComponent(keyword))
      .then(response => response.json())
      .then(json => dispatch(searchSuccess(json)))
      .catch(error => dispatch(searchFailure(error)));
  };

  return action;
};

export {
  sendSearchRequest,
  startSearch,
  searchFailure,
  searchSuccess
};
