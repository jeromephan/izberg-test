import {
  GET_DETAILS_BY_NAME_BEGIN,
  GET_DETAILS_BY_NAME_FAILURE,
  GET_DETAILS_BY_NAME_SUCCESS,
} from './modal.actions';

export const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export default function modalReducer(state = initialState, action) {
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
        data: action.payload.data,
      };

    case GET_DETAILS_BY_NAME_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {},
        error: action.payload.error,
      };

    default:
      return state;
  }
}
