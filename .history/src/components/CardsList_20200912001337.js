import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../store/actions/pokemonActions';

const CardsList = ({ dispatch }) => {
  useEffect(() => {  
    dispatch(getPokemon());

    return () => {}
  }, []);

  return <p>Allo</p>;
};

const mapState = (state) => ({
  pokemon: state.pokemon.pokemon,
  isLoading: state.pokemon.isLoading,
  error: state.pokemon.error,
});

export default connect(mapState)(CardsList);
