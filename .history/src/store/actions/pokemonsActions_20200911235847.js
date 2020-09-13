import axios from 'axios';

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonsBegin());

      console.log(process.env.API_URL)

      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');

      console.log(data);

      dispatch(getPokemonsSuccess(data));
    } catch (error) {
      dispatch(getPokemonsError(error));
    }
  };
};

export const GET_POKEMONS_BEGIN = 'GET_POKEMONS_BEGIN';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';

export const getPokemonsBegin = () => ({
  type: GET_POKEMONS_BEGIN,
});

export const getPokemonsSuccess = (pokemons) => ({
  type: GET_POKEMONS_SUCCESS,
  payload: { pokemons },
});

export const getPokemonsError = (error) => ({
  type: GET_POKEMONS_FAILURE,
  payload: { error },
});
