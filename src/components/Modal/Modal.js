import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetailsByName } from '../../store/modules/modal/modal.actions';
import './Modal.scss';
import ModalContent from './ModalContent/ModalContent';
import Loader from '../Loader/Loader';
import { PropTypes } from 'prop-types';

const mapStateToProps = (state) => ({
  data: state.modal.data,
  isLoading: state.modal.isLoading,
  error: state.modal.error,
});

const Modal = ({ history, dispatch, match, data, isLoading, error }) => {
  const goBack = () => history.goBack;

  useEffect(() => {
    const getDetails = () => {
      dispatch(getDetailsByName(match.params.pokemon));
    };

    getDetails();
  }, [match.params.pokemon, dispatch]);

  const errorComponent = <p>{((error || {}).response || {}).data}</p>;
  const content = isLoading ? <Loader /> : <ModalContent pokemon={data} />;

  return (
    <div role='button' className='modal' onClick={goBack()}>
      <div
        role='button'
        className='modal__wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal__content'>{error ? errorComponent : content}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps)(withRouter(Modal));
