import {
  GET_POKEMON_BEGIN,
  GET_POKEMON_FAILURE,
  GET_POKEMON_SUCCESS,
} from './pokemon.list.actions';

const initialState = {
  pokemon: [],
  count: 0,
  next: null,
  previous: null,
  isLoading: false,
  error: null,
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload.pokemon,
      };

    case GET_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
