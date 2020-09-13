import React from 'react';
import './ModalContent.scss';

const ModalContent = ({ pokemon }) => {
  return (
    <div className='modal-content'>
      <div className='modal-content__wrapper'>
        <p className='modal-content__name'>
          {pokemon.order}. {pokemon.name}
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
