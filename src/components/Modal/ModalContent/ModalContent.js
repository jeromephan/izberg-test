import React from 'react';
import Favorite from '../../Favorite/Favorite';
import './ModalContent.scss';
import { PropTypes } from 'prop-types';

const joinArray = (names) => names.join(', ');

const ModalContent = ({ pokemon }) => {
  return (
    <div className='modal-content'>
      <p className='modal-content__name'>
        {pokemon.id}. {pokemon.name}
      </p>
      <div className='modal-content__wrapper'>
        <img
          className='modal-content__sprite'
          alt={`${pokemon.name} front`}
          src={(pokemon.sprites || {}).front_default}
        />
        <img
          className='modal-content__sprite'
          alt={`${pokemon.name} front`}
          src={(pokemon.sprites || {}).back_default}
        />
      </div>
      <p className='modal-content__text'>
        <span className='modal-content__text--bold'>Type:</span>{' '}
        <span className='modal-content__text--capitalize'>
          {joinArray((pokemon.types || []).map((type) => type.type.name))}
        </span>
      </p>
      <p className='modal-content__text'>
        <span className='modal-content__text--bold'>Abilities:</span>{' '}
        <span className='modal-content__text--capitalize'>
          {joinArray(
            (pokemon.abilities || []).map((ability) => ability.ability.name)
          )}
        </span>
      </p>
      <p className='modal-content__text'>
        <span className='modal-content__text--bold'>Base Stats:</span>{' '}
      </p>
      <ul className='modal-content__list'>
        {(pokemon.stats || []).map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <Favorite className='modal-content__favorite' pokemon={pokemon} />
    </div>
  );
};

ModalContent.propTypes = {
  pokemon: PropTypes.object,
};

export default ModalContent;
