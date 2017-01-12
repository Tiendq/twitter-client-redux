const todoItem = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'REMOVE_ITEM':
      return state.id !== action.id ? state : null;

    case 'TOGGLE_ITEM':
      return state.id !== action.id ? state : Object.assign({}, state, { completed: !state.completed });

    default:
      return state
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, todoItem(null, action)];

    case 'REMOVE_ITEM':
      return state.filter(i => null !== todoItem(i, action));

    case 'TOGGLE_ITEM':
      return state.map(i => todoItem(i, action));

    default:
      return state
  }
}

const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;

    default:
      return state;
  }
};

export default {
  items,
  filter
};
