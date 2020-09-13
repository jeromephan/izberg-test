import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './favorites.actions';

const initialState = {
  favorites: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            name: action.payload.pokemon.name,
            url: action.payload.pokemon.url || `${process.env.REACT_APP_API_URL}/${action.payload.pokemon.id}`
          },
        ],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (pokemon) => pokemon.name !== action.payload.pokemon.name
        ),
      };

    default:
      return state;
  }
}
