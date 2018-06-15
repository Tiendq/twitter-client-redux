import * as actions from './actions';
import * as reducers from './reducers';

test('tweets should return initial state with unknow actions', () => {
  expect(reducers.tweets(undefined, '')).toEqual([]);
});

test(`tweets should return current state when ${actions.SEARCH_COMPLETE} fails`, () => {
  expect(reducers.tweets(['test'], {
    type: actions.SEARCH_COMPLETE,
    error: new Error('test')
  })).toEqual(['test']);
});

test(`tweets should return new state when ${actions.SEARCH_COMPLETE} succeeded`, () => {
  expect(reducers.tweets(['old'], {
    type: actions.SEARCH_COMPLETE,
    error: null,
    result: ['new']
  })).toEqual(['new']);
});
