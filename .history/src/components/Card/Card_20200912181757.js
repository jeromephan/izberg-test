import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon, className }) => {
  return (
    <Link
      className={`card ${className}`}
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
