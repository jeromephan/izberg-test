import React from 'react';
import './ModalContent.scss';

const ModalContent = ({ pokemon }) => {
  return (
    <div className='modal-content'>
      <p className='modal-content__name'>
        {pokemon.order}. {pokemon.name}
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
          {(pokemon.types || []).map((type) => type.type.name)}
        </span>
      </p>
    </div>
  );
};

export default ModalContent;
