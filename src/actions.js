export const SEARCH_START = 'SEARCH_START';
export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

// In Redux action creators simply return an action.
// http://redux.js.org/docs/basics/Actions.html
export const searchStart = makeActionCreator(SEARCH_START, 'keyword');
export const searchComplete = makeActionCreator(SEARCH_COMPLETE, 'error', 'result');

// Thunk middleware knows how to handle functions.
// The inner function receives the store methods dispatch and getState as parameters.
// thus making it able to dispatch actions itself.
export const sendSearchRequest = (keyword) => {
  let action = async (dispatch) => {
    dispatch(searchStart(keyword));

    try {
      let response = await fetch(`/search?q=${encodeURIComponent(keyword)}`);
      let json = await response.json();

      dispatch(searchComplete(null, json));
    } catch (error) {
      dispatch(searchComplete(error));
    }
  }

  return action;
};

// Generic sync action creator.
// http://redux.js.org/docs/recipes/ReducingBoilerplate.html
function makeActionCreator(type, ...propNames) {
  return (...values) => {
    let action = { type };

    for (let index in propNames)
      action[propNames[index]] = values[index];

    return action;
  };
}
