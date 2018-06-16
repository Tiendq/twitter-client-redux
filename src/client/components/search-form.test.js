import React from 'react';
import { cleanup, fireEvent, render, renderIntoDocument, Simulate } from 'react-testing-library';
import SearchForm from './search-form';

afterEach(() => cleanup());

test('SearchForm should renders correctly', () => {
  let { container } = render(<SearchForm startSearch={jest.fn()} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('search should start with "test"', () => {
  let startSearch = jest.fn();
  let { container } = renderIntoDocument(<SearchForm startSearch={startSearch} />);

  let keyword = 'test';

  let search = container.querySelector('input[type=text]');
  search.value = keyword;

  Simulate.change(search);

  fireEvent(
    container.querySelector('button[type=submit]'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(startSearch).toBeCalledWith(keyword);
});
