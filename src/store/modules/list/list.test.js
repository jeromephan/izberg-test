import reducer, { initialState } from './list.reducers';
import * as actions from './list.actions';
import mocks from '../../../tests/mocks';

describe('List reducers', () => {
  test('It should set the isLoading state to true when the dispatch to set the list begins', () => {
    const getListBeginAction = {
      type: actions.GET_LIST_BEGIN,
      payload: { isLoading: true },
    };

    expect(reducer(initialState, getListBeginAction)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('It should set the list with the payload data and set the loading boolean to false when the dispatch to set the list succeeds', () => {
    const list = mocks.pokemonList;
    const count = 20;
    const next = true;
    const previous = null;

    const getListSuccessAction = {
      type: actions.GET_LIST_SUCCESS,
      payload: { list, count, previous, next },
    };

    expect(reducer(initialState, getListSuccessAction)).toEqual({
      ...initialState,
      isLoading: false,
      list,
      previous,
      next,
      count,
    });
  });

  test('It should set the error state with the payload error and set the loading boolean to false when the dispatch to set the list fails', () => {
    const list = mocks.pokemonList;
    const error = 'An error has occured';

    const getListFailureAction = {
      type: actions.GET_LIST_FAILURE,
      payload: { error },
    };

    expect(
      reducer({ ...initialState, list, isLoading: true }, getListFailureAction)
    ).toEqual({
      ...initialState,
      isLoading: false,
      list: [],
      error,
    });
  });
});
