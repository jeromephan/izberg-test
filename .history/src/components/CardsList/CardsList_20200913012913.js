import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../store/modules/list/list.actions';
import Card from '../Card/Card';
import './CardsList.scss';

const mapState = (state) => ({
  list: state.list.list,
  isLoading: state.list.isLoading,
  error: state.list.error,
});

const CardsList = ({ dispatch, list }) => {
  useEffect(() => {
    dispatch(getList());

    return () => {};
  }, []);

  return (
    <div className='cards-list'>
      {list.map(pokemon => (
        <Card
          className='cards-list__card'
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
};

export default connect(mapState)(CardsList);
