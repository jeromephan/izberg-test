import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../store/actions/pokemonActions';

const CardsList = ({ dispatch }) => {
  useEffect(() => {  
    dispatch(getPokemons());

    return () => {}
  }, []);

  return <p>Allo</p>;
};

const mapState = (state) => ({
  pokemons: state.pokemons.pokemons,
  isLoading: state.pokemons.isLoading,
  error: state.pokemons.error,
});

export default connect(mapState)(CardsList);
