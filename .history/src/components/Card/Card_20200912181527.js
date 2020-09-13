import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {
  return (
    <Link
      to={{
        pathname: pokemon.name,
        state: { modal: true },
      }}
    >
      {pokemon.name}
    </Link>
  );
};

export default Card;
