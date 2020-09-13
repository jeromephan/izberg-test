import React from 'react';
import { withRouter } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ history, child }) => {
  const goBack = () => history.goBack;

  return (
    <div role='button' className='modal' onClick={goBack()}>
      <div
        role='button'
        className='modal__wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        {child}
      </div>
    </div>
  );
};

export default withRouter(Modal);
