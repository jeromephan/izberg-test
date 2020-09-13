import axios from 'axios';

export const GET_POKEMON_BEGIN = 'pokemon/GET_POKEMON_BEGIN';
export const GET_POKEMON_SUCCESS = 'pokemon/GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'pokemon/GET_POKEMON_FAILURE';

export const getPokemonBegin = () => ({
  type: GET_POKEMON_BEGIN,
});

export const getPokemonSuccess = ({ pokemon, next, count, previous }) => ({
  type: GET_POKEMON_SUCCESS,
  payload: { pokemon, previous, next, count },
});

export const getPokemonError = (error) => ({
  type: GET_POKEMON_FAILURE,
  payload: { error },
});

export const getPokemon = () => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonBegin());

      const {
        data: { count, next, previous, results: pokemon },
      } = await axios.get(process.env.REACT_APP_API_URL);

      dispatch(getPokemonSuccess({ count, next, previous, pokemon }));
    } catch (error) {
      dispatch(getPokemonError(error));
    }
  };
};

export const GET_POKEMON_BY_NAME_BEGIN = 'pokemon/GET_POKEMON_BY_NAME_BEGIN';
export const GET_POKEMON_BY_NAME_SUCCESS = 'pokemon/GET_POKEMON_BY_NAME_SUCCESS';
export const GET_POKEMON_BY_NAME_FAILURE = 'pokemon/GET_POKEMON_BY_NAME_FAILURE';

export const getPokemonByNameBegin = () => ({
  type: GET_POKEMON_BY_NAME_BEGIN,
});

export const getPokemonByNameSuccess = ({ pokemon }) => ({
  type: GET_POKEMON_BY_NAME_SUCCESS,
  payload: { pokemon },
});

export const getPokemonByNameError = (error) => ({
  type: GET_POKEMON_BY_NAME_FAILURE,
  payload: { error },
});

export const getPokemonByName = () => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonByNameBegin());

      const {
        data: { count, next, previous, results: pokemon },
      } = await axios.get(process.env.REACT_APP_API_URL);

      dispatch(getPokemonByNameSuccess({ count, next, previous, pokemon }));
    } catch (error) {
      dispatch(getPokemonByNameError(error));
    }
  };
};
