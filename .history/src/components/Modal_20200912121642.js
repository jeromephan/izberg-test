import React from 'react';
import { withRouter } from 'react-router-dom';

const Modal = ({ history }) => {
  const goBack = () => history.goBack;

  return (
    <div role='button' className='modal' onClick={goBack()}>
      <div
        role='button'
        className='modal__wrapper'
        onClick={(e) => e.stopPropagation()}
      >
          <p>Yeees</p>
      </div>
    </div>
  );
};

export default withRouter(Modal);