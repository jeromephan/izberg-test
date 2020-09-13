import reducer, { initialState } from './modal.reducers';
import * as actions from './modal.actions';
import mocks from '../../../tests/mocks';

describe('Modal reducers', () => {
  test('It should set the isLoading state to true when the dispatch to get the details begins', () => {
    const getDetailsByNameBeginAction = {
      type: actions.GET_DETAILS_BY_NAME_BEGIN,
      payload: { isLoading: true },
    };

    expect(reducer(initialState, getDetailsByNameBeginAction)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('It should set the data state with the payload data and set the loading boolean to false when the dispatch to get the details succeeds', () => {
    const data = mocks.pokemon1;

    const getDetailsByNameAction = {
      type: actions.GET_DETAILS_BY_NAME_SUCCESS,
      payload: { data },
    };

    expect(reducer(initialState, getDetailsByNameAction)).toEqual({
      ...initialState,
      isLoading: false,
      data,
    });
  });

  test('It should set the error state with the payload error and set the loading boolean to false when the dispatch to get the details fails', () => {
    const data = mocks.pokemon1;
    const error = 'An error has occured';

    const getDetailsByNameFailureAction = {
      type: actions.GET_DETAILS_BY_NAME_FAILURE,
      payload: { error },
    };

    expect(
      reducer({ ...initialState, data, isLoading: true }, getDetailsByNameFailureAction)
    ).toEqual({
      ...initialState,
      isLoading: false,
      data: {},
      error,
    });
  });
});
