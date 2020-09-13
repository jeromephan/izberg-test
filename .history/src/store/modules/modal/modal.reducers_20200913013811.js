import {
    GET_DETAILS_BY_NAME_BEGIN,
    GET_DETAILS_BY_NAME_FAILURE,
    GET_DETAILS_BY_NAME_SUCCESS,
  } from './modal.actions';
  
  const initialState = {
    data: {},
    isLoading: false,
    error: null,
  };
  
  export default function listReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DETAILS_BY_NAME_BEGIN:
        return {
          ...state,
          isLoading: true,
        };
  
      case GET_DETAILS_BY_NAME_SUCCESS:
        return {
          ...state,
          isLoading: false,
          list: action.payload.list,
        };
  
      case GET_DETAILS_BY_NAME_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.error,
        };
  
      default:
        return state;
    }
  };
  