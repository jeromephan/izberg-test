import React from 'react';
import configureStore from 'redux-mock-store';
import { initialState as initialStateFavorites } from '../../store/modules/favorites/favorites.reducers';
import * as actions from '../../store/modules/favorites/favorites.actions';
import { render, act } from '@testing-library/react';
import Favorite from './Favorite';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { pokemon1, pokemonList } from '../../tests/mocks';

const mockStore = configureStore();

describe('Favorites', () => {
  const pokemon = pokemon1;

  test('It should add the pokemon to the favorite list when clicking on the favorite button', () => {
    jest.spyOn(actions, 'addToFavorites');

    const store = mockStore({
      favorites: initialStateFavorites,
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Favorite pokemon={pokemon} />
        </MemoryRouter>
      </Provider>
    );

    act(() => {
      const button = container.querySelector('.favorite');

      button.click();
    });

    expect(actions.addToFavorites).toHaveBeenCalledWith(pokemon);
  });

  test('It should remove from the favorite list when clicking on the favorite button', () => {
    jest.spyOn(actions, 'removeFromFavorites');

    const store = mockStore({
      favorites: {
        favorites: pokemonList,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Favorite pokemon={pokemon} />
        </MemoryRouter>
      </Provider>
    );

    act(() => {
      const button = container.querySelector('.favorite');

      button.click();
    });

    expect(actions.removeFromFavorites).toHaveBeenCalledWith(pokemon);
  });
});
