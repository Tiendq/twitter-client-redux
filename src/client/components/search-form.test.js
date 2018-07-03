import React from 'react';
import { cleanup, fireEvent, render, renderIntoDocument } from 'react-testing-library';
import SearchForm from './search-form';

afterEach(() => cleanup());

test('should render correctly', () => {
  let ref = React.createRef();
  let { container } = render(<SearchForm startSearch={jest.fn()} forwardedRef={ref} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('search should start with "test"', () => {
  let ref = React.createRef();
  let startSearch = jest.fn();
  let { container } = renderIntoDocument(<SearchForm startSearch={startSearch} forwardedRef={ref} />);

  let keyword = 'test';

  let search = container.querySelector('input[type=text]');
  search.value = keyword;
  fireEvent.change(search);

  let submit = container.querySelector('button[type=submit]');
  fireEvent.click(submit);

  expect(startSearch).toBeCalledWith(keyword);
});

test('submit button should have correct classes', () => {
  let ref = React.createRef();
  let { container } = render(<SearchForm startSearch={jest.fn()} forwardedRef={ref} />);

  let submit = container.querySelector('button[type=submit]');
  expect(submit).toHaveClass('btn-success');
});
