import axios from 'axios';

export const getPokemon = () => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonBegin());

      const {
        data: { count, next, previous, results },
      } = await axios.get('https://pokeapi.co/api/v2/pokemon');

      dispatch(getPokemonSuccess());
    } catch (error) {
      dispatch(getPokemonError(error));
    }
  };
};

export const GET_POKEMON_BEGIN = 'GET_POKEMON_BEGIN';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';

export const getPokemonBegin = () => ({
  type: GET_POKEMON_BEGIN,
});

export const getPokemonSuccess = ({ results, next, count, previous }) => ({
  type: GET_POKEMON_SUCCESS,
  payload: { pokemons: results, previous, next, results },
});

export const getPokemonError = (error) => ({
  type: GET_POKEMON_FAILURE,
  payload: { error },
});
