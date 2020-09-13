import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailsByName } from '../../store/modules/modal/modal.actions';
import './Modal.scss';

const mapState = (state) => ({
  data: state.modal.data,
  isLoading: state.modal.isLoading,
  error: state.modal.error,
});

const Modal = ({ history, child, dispatch, match }) => {
  const goBack = () => history.goBack;

  console.log(match)

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

export default connect(mapState)(withRouter(Modal));
