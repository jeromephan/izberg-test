import React from 'react';
import { render } from '@testing-library/react';
import CardsList from './CardsList';
import { pokemonList } from '../../tests/mocks';
import { initialState as initialStateFavorites } from '../../store/modules/favorites/favorites.reducers';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('CardsList', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      favorites: initialStateFavorites,
    });
  });

  test('It should render as many card component than there are in the pokemon array', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CardsList pokemon={pokemonList} />
        </MemoryRouter>
      </Provider>
    );

    const cards = container.querySelectorAll('.card');

    expect(cards.length).toBe(pokemonList.length);
  });

  test('It should render the Loading component if the isLoading state is true', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CardsList pokemon={pokemonList} isLoading={true} />
        </MemoryRouter>
      </Provider>
    );

    const cards = container.querySelectorAll('.card');

    expect(cards.length).toBe(0);

    expect(container.querySelector('.loader')).not.toBe(null);
  });

  test('It should render the error message if the error state is true and not render the list of cards', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CardsList
            pokemon={pokemonList}
            error={{ data: { message: 'Error when getting list' } }}
          />
        </MemoryRouter>
      </Provider>
    );

    const cards = container.querySelectorAll('.card');

    expect(cards.length).toBe(0);

    expect(container.querySelector('.cards-list__error')).not.toBe(null);
  });
});
