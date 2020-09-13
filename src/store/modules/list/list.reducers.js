import {
  GET_LIST_BEGIN,
  GET_LIST_FAILURE,
  GET_LIST_SUCCESS,
} from './list.actions';

const initialState = {
  list: [],
  count: 0,
  next: null,
  previous: null,
  isLoading: false,
  error: null,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GET_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.list,
        previous: action.payload.previous,
        next: action.payload.next,
        count: action.payload.count,
      };

    case GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
