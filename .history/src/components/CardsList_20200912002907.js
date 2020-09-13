import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../store/actions/pokemonActions';
import Card from './Card'

const mapState = (state) => ({
  pokemon: state.pokemon.pokemon,
  isLoading: state.pokemon.isLoading,
  error: state.pokemon.error,
});

const CardsList = ({ dispatch }) => {
  useEffect(() => {  
    dispatch(getPokemon());

    return () => {}
  }, []);

  return <p>{pokemon}</p>;
};

export default connect(mapState)(CardsList);
