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
    </div>
  );
};

export default ModalContent;
