import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../store/modules/list/list.actions';
import Card from '../Card/Card';
import './CardsList.scss';

const mapState = (state) => ({
  pokemon: state.list.list,
  isLoading: state.list.isLoading,
  error: state.list.error,
});

const CardsList = (props) => {
  useEffect(() => {
    props.dispatch(getList());

    return () => {};
  }, []);

  return (
    <div className='cards-list'>
      {props.pokemon.map((pokemon) => (
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
