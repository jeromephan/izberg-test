import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { initialState } from '../store/modules/list/list.reducers';
import * as actions from '../store/modules/list/list.actions';
import { render, act } from '@testing-library/react';
import Pokemon from './Pokemon';
import { MemoryRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import queryString from 'query-string';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pokemon view', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      list: initialState,
    });
  });

  test('It should get the list when the component is mounted', () => {
    jest.spyOn(actions, 'getList');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pokemon />
        </MemoryRouter>
      </Provider>
    );

    expect(actions.getList).toHaveBeenCalled();
  });

  test('It should get the list page when the route.query.page is set', () => {
    jest.spyOn(actions, 'getList');
    const page = 3;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/?page=${page}`]}>
          <Pokemon />
        </MemoryRouter>
      </Provider>
    );

    expect(actions.getList).toHaveBeenCalledWith(page);
  });

  test('Clicking on previous page should change the route to previous page', () => {
    const page = 3;
    const history = createMemoryHistory({
      initialEntries: [`/?page=${page}`],
      initialIndex: 0,
    });

    const mockedStore = mockStore({
      list: {
        ...initialState,
        previous: true,
      },
    });

    const { container } = render(
      <Provider store={mockedStore}>
        <Router history={history}>
          <Pokemon previous={true} />
        </Router>
      </Provider>
    );

    act(() => {
      const links = container.querySelectorAll('.cards-list__link');

      links[0].click();
    });

    const locationQuery = queryString.parse(history.location.search);

    expect(Number(locationQuery.page)).toBe(page - 1);
  });

  test('Clicking on next page should change the route to the next page number', () => {
    const page = 3;
    const history = createMemoryHistory({
      initialEntries: [`/?page=${page}`],
      initialIndex: 0,
    });

    const mockedStore = mockStore({
      list: {
        ...initialState,
        next: true,
      },
    });

    const { container } = render(
      <Provider store={mockedStore}>
        <Router history={history}>
          <Pokemon next={true} />
        </Router>
      </Provider>
    );

    act(() => {
      const links = container.querySelectorAll('.cards-list__link');

      links[1].click();
    });

    const locationQuery = queryString.parse(history.location.search);

    expect(Number(locationQuery.page)).toBe(page + 1);
  });
});
