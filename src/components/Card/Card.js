import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import './Card.scss';
import { PropTypes } from 'prop-types';

const Card = ({ pokemon, className, location }) => {
  return (
    <Link
      key={pokemon.name}
      className={`card ${className}`}
      to={{
        pathname:
          location.pathname === '/'
            ? `/pokemon/${pokemon.name}`
            : `${location.pathname}/${pokemon.name}`,
        search: location.search,
      }}
    >
      <p className='card__text'>{pokemon.name}</p>
      <Favorite className='card__favorite' pokemon={pokemon} />
    </Link>
  );
};

Card.propTypes = {
  pokemon: PropTypes.object,
}

export default withRouter(Card);
