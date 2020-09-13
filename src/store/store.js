import { combineReducers } from '@reduxjs/toolkit';
import list from './modules/list/list.reducers';
import modal from './modules/modal/modal.reducers';
import favorites from './modules/favorites/favorites.reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const rootReducers = combineReducers({
  list,
  modal,
  favorites,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
