import React, { useEffect } from 'react';
import { getPokemons } from '../store/actions/pokemonsActions';

const CardsList = (props) => {
  useEffect(() => {
    props.dispatch(getPokemons());
  });

  return <p>Allo</p>;
};

export default CardsList;
