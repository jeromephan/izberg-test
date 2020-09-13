import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { pokemon2 } from '../../tests/mocks';
import { initialState as initialStateFavorites } from '../../store/modules/favorites/favorites.reducers';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Card', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      favorites: initialStateFavorites,
    });
  });

  test('It should render a card with a link to open a modal', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Card pokemon={pokemon2} />
        </MemoryRouter>
      </Provider>
    );

    const link = container.querySelector('a');

    expect(link.href).toContain(`/pokemon/${pokemon2.name}`);
  });
});
