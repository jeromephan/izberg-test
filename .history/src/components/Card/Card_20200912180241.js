import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ pokemon }) => {
  return (
    <Link
      className='card'
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
