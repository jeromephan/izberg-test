import axios from 'axios';

export const getPokemon = () => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonBegin());

      console.log(process.env)

      const {
        data: { count, next, previous, results: pokemon },
      } = await axios.get(process.env.API_URL);

      dispatch(getPokemonSuccess({ count, next, previous, pokemon }));
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

export const getPokemonSuccess = ({ pokemon, next, count, previous }) => ({
  type: GET_POKEMON_SUCCESS,
  payload: { pokemon, previous, next, count },
});

export const getPokemonError = (error) => ({
  type: GET_POKEMON_FAILURE,
  payload: { error },
});
