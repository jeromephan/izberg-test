import axios from 'axios';

export const GET_DETAILS_BY_NAME_BEGIN = 'modal/GET_DETAILS_BY_NAME_BEGIN';
export const GET_DETAILS_BY_NAME_SUCCESS = 'modal/GET_DETAILS_BY_NAME_SUCCESS';
export const GET_DETAILS_BY_NAME_FAILURE = 'modal/GET_DETAILS_BY_NAME_FAILURE';

export const getListByNameBegin = () => ({
  type: GET_DETAILS_BY_NAME_BEGIN,
});

export const getListByNameSuccess = ({ list }) => ({
  type: GET_DETAILS_BY_NAME_SUCCESS,
  payload: { list },
});

export const getListByNameError = (error) => ({
  type: GET_DETAILS_BY_NAME_FAILURE,
  payload: { error },
});

export const getListByName = () => {
  return async (dispatch) => {
    try {
      dispatch(getListByNameBegin());

      const {
        data: { count, next, previous, results: list },
      } = await axios.get(process.env.REACT_APP_API_URL);

      dispatch(getListByNameSuccess({ count, next, previous, list }));
    } catch (error) {
      dispatch(getListByNameError(error));
    }
  };
};
