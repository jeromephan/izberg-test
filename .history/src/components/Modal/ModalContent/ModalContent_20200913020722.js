import React from 'react';
import './ModalContent.scss';

const ModalContent = ({ pokemon }) => {
  return (
    <div className='modal-content'>
      <div className='modal-content__wrapper'>
        <p className='modal-content__name'>
          {pokemon.order}. {pokemon.name}
        </p>
        <img
          alt={`${pokemon.name} front`}
          src={(pokemon.sprite || {}).front_default}
        />
      </div>
    </div>
  );
};

export default ModalContent;
