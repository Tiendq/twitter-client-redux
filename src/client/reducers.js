import { SEARCH_START, SEARCH_COMPLETE } from './actions';

const initialState = {
  keyword: '',
  tweets: [],
  lastStatus: {
    status: '',
    text: ''
  }
}

// The reducer is a pure function that takes the previous state and an action,
// and returns the next state.
// https://redux.js.org/basics/reducers
export const tweets = (state = initialState.tweets, action) => {
  switch (action.type) {
    case SEARCH_COMPLETE:
      return action.error ? state : action.result;

    default:
      return state;
  }
}

export const lastStatus = (state = initialState.lastStatus, action) => {
  switch (action.type) {
    case SEARCH_START:
      return { status: 'info', text: `Searching for "${action.keyword}"...` };

    case SEARCH_COMPLETE:
      return {
        status: action.error ? 'danger' : 'success',
        text: action.error ? action.error.toString() : ''
      }

    default:
      return state;
  }
}

export const keyword = (state = initialState.keyword, action) => {
  switch (action.type) {
    case SEARCH_START:
      return action.keyword;

    default:
      return state;
  }
}
