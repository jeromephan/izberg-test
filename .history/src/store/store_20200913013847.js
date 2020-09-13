import { combineReducers } from '@reduxjs/toolkit';
import list from './modules/list/list.reducers';
import modal from './modules/modal/modal.reducers';

export default combineReducers ({
    list,
    modal
});
