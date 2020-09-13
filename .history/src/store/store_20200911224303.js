import { configureStore } from "redux";
import pokemonsReducer from "./slices/pokemonsSlice";

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
