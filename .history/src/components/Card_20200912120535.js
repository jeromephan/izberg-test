import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {
  return <Link to={pokemon.name}>{pokemon.name}</Link>;
};

export default Card;
