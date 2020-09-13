import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../store/modules/list/list.reducers';
import * as actions from '../store/modules/list/list.actions';
import { render } from '@testing-library/react';
import Pokemon from './Pokemon';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

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

    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/?page=${page}`]}>
          <Pokemon />
        </MemoryRouter>
      </Provider>
    );


    expect(actions.getList).toHaveBeenCalledWith(page);
  });
});
