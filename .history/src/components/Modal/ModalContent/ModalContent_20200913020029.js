import React from 'react';

const ModalContent = ({ pokemon }) => {
  return (
    <div className='modal-content'>
      <p className='modal-content__name'>{pokemon.name}</p>
    </div>
  );
};

export default ModalContent;
