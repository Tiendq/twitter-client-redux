const tweets = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;

    default:
      return state;
  }
};

const lastStatus = (state = { status: '', text: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;

    default:
      return state;
  }
};

export default {
  tweets,
  lastStatus
};
