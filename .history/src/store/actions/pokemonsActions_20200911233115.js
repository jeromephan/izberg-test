import Axios from "axios";

export const getPokemons = async dispatch => {
return Axios.get(process.env.API_URL)
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
