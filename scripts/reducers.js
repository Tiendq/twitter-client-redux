import { START_SEARCH, SEARCH_FAILURE, SEARCH_SUCCESS } from './actions';

const tweets = (state = [], action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return action.response;

    default:
      return state;
  }
};

const lastStatus = (state = { status: '', text: '' }, action) => {
  switch (action.type) {
    case START_SEARCH:
      return { status: 'primary', text: `Searching for "${action.keyword}"...` };

    case SEARCH_FAILURE:
      return { status: 'danger', text: action.error.toString() };

    case SEARCH_SUCCESS:
      return { status: '', text: '' };

    default:
      return state;
  }
};

export default {
  tweets,
  lastStatus
};
