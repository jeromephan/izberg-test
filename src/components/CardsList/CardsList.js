import React from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import './CardsList.scss';
import { PropTypes } from 'prop-types';

const CardsList = ({ pokemon, isLoading, error }) => {
  const loaderComponent = <Loader />;
  const listComponent = pokemon.length || isLoading ? (
    pokemon.map((pokemon) => (
      <Card className='cards-list__card' key={pokemon.name} pokemon={pokemon} />
    ))
  ) : (
    <p className='cards-list__text'>No pokemon was found at this page</p>
  );
  const errorComponent = (
    <p className='cards-list__error'>{((error || {}).response || {}).data}</p>
  );
  const contentComponent = isLoading ? loaderComponent : listComponent;

  return (
    <div className='cards-list'>
      <div className='cards-list__wrapper'>
        {error ? errorComponent : contentComponent}
      </div>
    </div>
  );
};

CardsList.propTypes = {
  pokemon: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CardsList;
