import {
  GET_POKEMONS_BEGIN,
  GET_POKEMONS_FAILURE,
  GET_POKEMONS_LIST,
  GET_POKEMONS_SUCCESS,
} from '../actions/pokemonsActions';

const initialState = {
  pokemons: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.payload.pokemons,
      };

    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
