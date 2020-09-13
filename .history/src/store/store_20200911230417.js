import { configureStore } from 'redux';
import pokemonsReducer from './slices/pokemonsSlice';

export default ({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
