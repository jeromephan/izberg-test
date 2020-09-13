import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../store/actions/pokemonsActions';

const CardsList = (props) => {
  useEffect(() => {
    getPokemons();

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
