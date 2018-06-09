import reduxThunk from 'redux-thunk';
import reduxMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as actions from './actions';

let mockStore = reduxMockStore([reduxThunk]);

test(`${actions.SEARCH_START} should be created properly`, () => {
  let expected = {
    type: actions.SEARCH_START,
    keyword: 'test'
  }

  expect(actions.searchStart('test')).toEqual(expected);
});

test(`${actions.SEARCH_COMPLETE} should be created properly`, () => {
  let expected = {
    type: actions.SEARCH_COMPLETE,
    error: new Error('Test'),
    result: ['test']
  }

  expect(actions.searchComplete(new Error('Test'), ['test'])).toEqual(expected);
});

describe('Async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('sendSearchRequest should be successful', async () => {
    fetchMock.getOnce('/search?q=test', {
      body: ['test'],
      headers: { 'Content-Type': 'application/json' }
    });

    let expectedActions = [{
      type: actions.SEARCH_START,
      keyword: 'test'
    }, {
      type: actions.SEARCH_COMPLETE,
      result: ['test'],
      error: null
    }];

    let store = mockStore({ tweets: [] });

    await store.dispatch(actions.sendSearchRequest('test'));

    expect(fetchMock.called()).toBe(true);
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('sendSearchRequest should fail', async () => {
    let error = new Error('test');

    fetchMock.getOnce('/search?q=test', {
      throws: error
    });

    let expectedActions = [{
      type: actions.SEARCH_START,
      keyword: 'test'
    }, {
      type: actions.SEARCH_COMPLETE,
      result: undefined,
      error
    }];

    let store = mockStore({ tweets: [] });

    await store.dispatch(actions.sendSearchRequest('test'));

    expect(fetchMock.called()).toBe(true);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
