import { combineReducers } from '@reduxjs/toolkit';
import list from './modules/list/list.reducers';
import modal from './modules/modal/modal.reducers';
import favorites from './modules/favorites/favorites.reducers';

export default combineReducers({
  list,
  modal,
  favorites,
});
