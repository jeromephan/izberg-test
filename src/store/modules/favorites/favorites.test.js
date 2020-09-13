import reducer from './favorites.reducers';
import * as actions from './favorites.actions';

const pokemon = { name: 'Charizard', url: 'http://someurl.com' };

describe('Favorites reducers', () => {
  test('should add to favorites when dispatching the ADD_TO_FAVORITES action', () => {
    const addToFavoritesAction = {
      type: actions.ADD_TO_FAVORITES,
      payload: { pokemon },
    };

    expect(reducer({ favorites: [] }, addToFavoritesAction)).toEqual({
      favorites: [pokemon],
    });
  });
  test('should remove form favorites when dispatching the REMOVE_FROM_FAVORITES action', () => {
    const removeFromFavoritesAction = {
      type: actions.REMOVE_FROM_FAVORITES,
      payload: { pokemon },
    };

    expect(
      reducer({ favorites: [pokemon] }, removeFromFavoritesAction)
    ).toEqual({
      favorites: [],
    });
  });
});
