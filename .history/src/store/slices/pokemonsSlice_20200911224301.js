import { createSlice, createAsyncThunk } from "redux";

const initialState = {
  pokemons: [],
  status: "idle",
  error: null,
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    GET_POKEMONS_LIST: (state) => {},
    GET_POKEMON_BY_ID: (state) => {},
  },
});
