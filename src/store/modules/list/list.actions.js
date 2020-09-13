import axios from 'axios';

export const GET_LIST_BEGIN = 'list/GET_LIST_BEGIN';
export const GET_LIST_SUCCESS = 'list/GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'list/GET_LIST_FAILURE';

export const getListBegin = () => ({
  type: GET_LIST_BEGIN,
});

export const getListSuccess = ({ list, next, count, previous }) => ({
  type: GET_LIST_SUCCESS,
  payload: { list, previous, next, count },
});

export const getListError = (error) => ({
  type: GET_LIST_FAILURE,
  payload: { error },
});

export const getList = (page, limit = 20) => {
  const offset = page * limit;

  return async (dispatch) => {
    try {
      dispatch(getListBegin());

      const {
        data: { count, next, previous, results: list },
      } = await axios.get(process.env.REACT_APP_API_URL, {
        params: { offset: offset, limit },
      });

      dispatch(getListSuccess({ count, next, previous, list }));
    } catch (error) {
      dispatch(getListError(error));
    }
  };
};
