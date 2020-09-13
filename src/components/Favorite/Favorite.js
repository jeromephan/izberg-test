import React from 'react';
import { connect } from 'react-redux';
import starActive from '../../assets/img/star-active.png';
import starInactive from '../../assets/img/star-inactive.png';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/modules/favorites/favorites.actions';
import './Favorite.scss';
import { PropTypes } from 'prop-types';

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
});

const Favorite = ({ favorites, pokemon, className, dispatch }) => {
  const isFavorite = !!favorites.find(
    (favorite) => favorite.name === pokemon.name
  );
  const starSrc = isFavorite ? starActive : starInactive;

  const clickOnFavorite = (e) => {
    e.preventDefault();

    if (isFavorite) {
      dispatch(removeFromFavorites(pokemon));
    } else {
      dispatch(addToFavorites(pokemon));
    }
  };

  return (
    <img
      role='button'
      onClick={(e) => clickOnFavorite(e)}
      src={starSrc}
      alt='favorite'
      className={`favorite ${className}`}
    />
  );
};

Favorite.propTypes = {
  favorites: PropTypes.array,
  pokemon: PropTypes.object,
};

export default connect(mapStateToProps)(Favorite);
