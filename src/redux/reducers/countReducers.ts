// src/redux/reducers.ts
import { ActionTypes } from '../actions/countAction';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
