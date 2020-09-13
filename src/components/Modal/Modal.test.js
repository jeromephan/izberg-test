import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { initialState as initialStateModal } from '../../store/modules/modal/modal.reducers';
import { initialState as initialStateFavorites } from '../../store/modules/favorites/favorites.reducers';
import * as actions from '../../store/modules/modal/modal.actions';
import { render, act } from '@testing-library/react';
import Modal from './Modal';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { pokemon1 } from '../../tests/mocks';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Modal', () => {
  let store;
  axios.get = jest.fn(() => ({}));

  beforeEach(() => {
    store = mockStore({
      modal: initialStateModal,
      favorites: initialStateFavorites,
    });
  });

  test('It should get pokemon details when the component is mounted', () => {
    jest.spyOn(actions, 'getDetailsByName');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Modal />
        </MemoryRouter>
      </Provider>
    );

    expect(actions.getDetailsByName).toHaveBeenCalled();
  });

  test('It should get the details page when the route.params.pokemonName is set', () => {
    jest.spyOn(actions, 'getDetailsByName');
    const pokemon = pokemon1;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/pokemon/${pokemon.name}`]}>
          <Route path='/pokemon/:pokemon'>
            <Modal />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    expect(actions.getDetailsByName).toHaveBeenCalledWith(pokemon.name);
  });

  test('Clicking on modal overlay should change the route to previous page', () => {
    const history = createMemoryHistory({
      initialEntries: ['/', `/pokemon/${pokemon1.name}`],
      initialIndex: 1,
    });

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Modal />
        </Router>
      </Provider>
    );

    expect(history.location.pathname).toBe(`/pokemon/${pokemon1.name}`);

    act(() => {
      const overlay = container.querySelector('.modal');

      overlay.click();
    });

    expect(history.location.pathname).toBe('/');
  });

  test('It should render the Loading component if the isLoading state is true', () => {
    const mockedStore = mockStore({
      favorites: initialStateFavorites,
      modal: {
        ...initialStateModal,
        isLoading: true,
      },
    });

    const { container } = render(
      <Provider store={mockedStore}>
        <MemoryRouter>
          <Modal />
        </MemoryRouter>
      </Provider>
    );

    expect(container.querySelector('.loader')).not.toBe(null);
  });
});
