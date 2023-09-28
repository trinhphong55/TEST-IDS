import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, fetchDataSuccess, fetchDataFailure } from '../actions/callApi';
//import * as api from ''; // Import thư viện gọi API của bạn

// Xác định kiểu dữ liệu trả về của chức năng generator
function* fetchDataSaga(): Generator<any, void, any> {
  try {
    // Thực hiện các tác vụ gọi API hoặc xử lý dữ liệu ở đây
    //const response = yield call(api.fetchData);
    const response= {data:{}}
    // Sau khi hoàn thành, gửi action thành công với dữ liệu từ API
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    // Gửi action thất bại nếu xảy ra lỗi
    yield put(fetchDataFailure(error));
  }
}

function* rootSaga() {
  // Lắng nghe action FETCH_DATA và gọi fetchDataSaga
  yield takeLatest(ActionTypes.FETCH_DATA, fetchDataSaga);
}

export default rootSaga;