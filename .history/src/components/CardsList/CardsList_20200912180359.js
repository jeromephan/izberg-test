import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../../store/modules/pokemon/pokemon.actions';
import Card from '../Card/Card';

const mapState = (state) => ({
  pokemon: state.pokemon.pokemon,
  isLoading: state.pokemon.isLoading,
  error: state.pokemon.error,
});

const CardsList = (props) => {
  useEffect(() => {
    props.dispatch(getPokemon());

    return () => {};
  }, []);

  return props.pokemon.map((pokemon) => (
    <Card className='cards-list' key={pokemon.name} pokemon={pokemon} />
  ));
};

export default connect(mapState)(CardsList);
