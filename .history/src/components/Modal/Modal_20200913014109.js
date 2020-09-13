import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getDetailsByName } from '../../store/modules/modal/modal.actions';
import './Modal.scss';

const Modal = ({ history, child, dispatch }) => {
  const goBack = () => history.goBack;

  useEffect(() => {
    dispatch(getDetailsByName());

    return () => {};
  }, []);

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
