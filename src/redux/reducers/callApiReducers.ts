// src/redux/reducers.ts
import { ActionTypes } from '../actions/callApi';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case ActionTypes.FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default rootReducer;
