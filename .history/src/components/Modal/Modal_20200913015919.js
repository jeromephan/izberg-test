import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailsByName } from '../../store/modules/modal/modal.actions';
import './Modal.scss';
import ModalContent from './ModalContent/ModalContent';

const mapState = (state) => ({
  data: state.modal.data,
  isLoading: state.modal.isLoading,
  error: state.modal.error,
});

const Modal = ({ history, child, dispatch, match }) => {
  const goBack = () => history.goBack;

  useEffect(() => {
    dispatch(getDetailsByName(match.params.pokemon));

    return () => {};
  }, []);

  return (
    <div role='button' className='modal' onClick={goBack()}>
      <div
        role='button'
        className='modal__wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal__content'>
          <ModalContent pokemon={data} />
        </div>
      </div>
    </div>
  );
};

export default connect(mapState)(withRouter(Modal));
