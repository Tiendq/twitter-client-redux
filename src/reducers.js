import { START_SEARCH, SEARCH_FAILURE, SEARCH_SUCCESS } from './actions';

const tweets = (state = [], action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return action.result;

    default:
      return state;
  }
};

const lastStatus = (state = { status: '', text: '' }, action) => {
  switch (action.type) {
    case START_SEARCH:
      return { status: 'info', text: `Searching for "${action.keyword}"...` };

    case SEARCH_FAILURE:
      return { status: 'danger', text: action.error.toString() };

    case SEARCH_SUCCESS:
      return { ...state, text: '' };

    default:
      return state;
  }
};

const keyword = (state = '', action) => {
  switch (action.type) {
    case START_SEARCH:
      return action.keyword;

    default:
      return state;
  }
};

export default {
  keyword,
  tweets,
  lastStatus
};
