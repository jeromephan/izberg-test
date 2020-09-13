import axios from 'axios';

export const GET_DETAILS_BY_NAME_BEGIN = 'modal/GET_DETAILS_BY_NAME_BEGIN';
export const GET_DETAILS_BY_NAME_SUCCESS = 'modal/GET_DETAILS_BY_NAME_SUCCESS';
export const GET_DETAILS_BY_NAME_FAILURE = 'modal/GET_DETAILS_BY_NAME_FAILURE';

export const getDetailsByNameBegin = () => ({
  type: GET_DETAILS_BY_NAME_BEGIN,
});

export const getDetailsByNameSuccess = data => ({
  type: GET_DETAILS_BY_NAME_SUCCESS,
  payload: { data },
});

export const getDetailsByNameError = (error) => ({
  type: GET_DETAILS_BY_NAME_FAILURE,
  payload: { error },
});

export const getDetailsByName = name => {
  return async (dispatch) => {
    try {
      dispatch(getDetailsByNameBegin());

      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${name}`);

      dispatch(getDetailsByNameSuccess(data));
    } catch (error) {
      dispatch(getDetailsByNameError(error));
    }
  };
};
