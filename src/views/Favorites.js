import React from 'react';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList/CardsList';

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

const Favorites = ({ favorites }) => {
  return <CardsList pokemon={favorites} />;
};

export default connect(mapStateToProps)(Favorites);
