import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/reducers';
import counterSaga from '../sagas/counSaga';
import callApiSaga from '../sagas/callApiSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(counterSaga);
sagaMiddleware.run(callApiSaga); // Thêm các saga khác nếu cần

export default store;