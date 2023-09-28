// src/redux/sagas.ts
import { takeLatest, put } from 'redux-saga/effects';
import { ActionTypes, increment } from '../actions/countAction';

function* watchIncrementAsync() {
  // Thực hiện các tác vụ khác (gọi API, xử lý dữ liệu) ở đây (nếu cần)
  yield put(increment());
}

function* counterSaga() {
  // Lắng nghe action INCREMENT_ASYNC và gọi watchIncrementAsync
  yield takeLatest(ActionTypes.INCREMENT_ASYNC, watchIncrementAsync);
}

export default counterSaga;