import axios from 'axios';

export const GET_LIST_BEGIN = 'list/GET_LIST_BEGIN';
export const GET_LIST_SUCCESS = 'list/GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'list/GET_LIST_FAILURE';

export const getListBegin = () => ({
  type: GET_LIST_BEGIN,
});

export const getListSuccess = ({ pokemon, next, count, previous }) => ({
  type: GET_LIST_SUCCESS,
  payload: { pokemon, previous, next, count },
});

export const getListError = (error) => ({
  type: GET_LIST_FAILURE,
  payload: { error },
});

export const getList = () => {
  return async (dispatch) => {
    try {
      dispatch(getListBegin());

      const {
        data: { count, next, previous, results: pokemon },
      } = await axios.get(process.env.REACT_APP_API_URL);

      dispatch(getListSuccess({ count, next, previous, pokemon }));
    } catch (error) {
      dispatch(getListError(error));
    }
  };
};

export const GET_LIST_BY_NAME_BEGIN = 'list/GET_LIST_BY_NAME_BEGIN';
export const GET_LIST_BY_NAME_SUCCESS = 'list/GET_LIST_BY_NAME_SUCCESS';
export const GET_LIST_BY_NAME_FAILURE = 'list/GET_LIST_BY_NAME_FAILURE';

export const getListByNameBegin = () => ({
  type: GET_LIST_BY_NAME_BEGIN,
});

export const getListByNameSuccess = ({ pokemon }) => ({
  type: GET_LIST_BY_NAME_SUCCESS,
  payload: { pokemon },
});

export const getListByNameError = (error) => ({
  type: GET_LIST_BY_NAME_FAILURE,
  payload: { error },
});

export const getListByName = () => {
  return async (dispatch) => {
    try {
      dispatch(getListByNameBegin());

      const {
        data: { count, next, previous, results: pokemon },
      } = await axios.get(process.env.REACT_APP_API_URL);

      dispatch(getListByNameSuccess({ count, next, previous, pokemon }));
    } catch (error) {
      dispatch(getListByNameError(error));
    }
  };
};
