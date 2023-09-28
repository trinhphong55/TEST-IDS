import { combineReducers } from 'redux';
import counterReducer from '../reducers/countReducers'; // Thay đổi đường dẫn tới tệp reducer con khác
import callApiReducer from '../reducers/callApiReducers'

const rootReducer = combineReducers({
  counter: counterReducer,
  callApi: callApiReducer,

});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;