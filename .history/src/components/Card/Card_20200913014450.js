import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ pokemon, className }) => {
  return (
    <Link
      className={`card ${className}`}
      to={pokemon.name}
    >
      <p className='card__text'>{pokemon.name}</p>
    </Link>
  );
};

export default Card;
