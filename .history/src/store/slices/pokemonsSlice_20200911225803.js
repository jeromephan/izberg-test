import { createSlice } from 'redux';

const initialState = {
  pokemons: [],
  status: 'idle',
  error: null,
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    GET_POKEMONS_LIST: (state) => {},
    GET_POKEMON_BY_ID: (state) => {},
  },
});

export const { GET_POKEMONS_LIST, GET_POKEMON_BY_ID } = pokemonsSlice.actions;

export default pokemonsSlice.reducers;
