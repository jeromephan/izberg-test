import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../../store/modules/pokemon/pokemon.actions';
import Card from '../Card/Card';
import './CardsList.scss';

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
    <div className='cards-list'>
      <Card
        className='cards-list__card'
        key={pokemon.name}
        pokemon={pokemon}
      />
    </div>
  ));
};

export default connect(mapState)(CardsList);
