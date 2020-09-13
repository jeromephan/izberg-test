import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailsByName } from '../../store/modules/modal/modal.actions';
import './Modal.scss';
import ModalContent from './ModalContent/ModalContent';
import Loader from '../Loader/Loader';

const mapState = (state) => ({
  data: state.modal.data,
  isLoading: state.modal.isLoading,
  error: state.modal.error,
});

const Modal = ({ history, child, dispatch, match, data, isLoading }) => {
  const goBack = () => history.goBack;

  useEffect(() => {
    dispatch(getDetailsByName(match.params.pokemon));

    return () => {};
  }, []);

  const content = true ? <Loader /> : <ModalContent pokemon={data} />;

  return (
    <div role='button' className='modal' onClick={goBack()}>
      <div
        role='button'
        className='modal__wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal__content'>
          {content}
        </div>
      </div>
    </div>
  );
};

export default connect(mapState)(withRouter(Modal));
