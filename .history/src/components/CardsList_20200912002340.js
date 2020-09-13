import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../store/actions/pokemonActions';
import Card from './Card'

const CardsList = ({ dispatch, }) => {
  useEffect(() => {  
    dispatch(getPokemon());

    return () => {}
  }, []);

  return (<Card />);
};

const mapState = (state) => ({
  pokemon: state.pokemon.pokemon,
  isLoading: state.pokemon.isLoading,
  error: state.pokemon.error,
});

export default connect(mapState)(CardsList);
