import React from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import './CardsList.scss';

const CardsList = ({ pokemon, isLoading }) => {
  const loaderComponent = <Loader />;
  const listComponent = pokemon.map((pokemon) => (
    <Card className='cards-list__card' key={pokemon.name} pokemon={pokemon} />
  ));
  const contentComponent = isLoading ? loaderComponent : listComponent;

  return (
    <div className='cards-list'>
      <div className='cards-list__wrapper'>{contentComponent}</div>
    </div>
  );
};

export default CardsList;
