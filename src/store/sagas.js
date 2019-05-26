import { put, takeEvery } from 'redux-saga/effects';
import { initListAction } from './actionCreator';
import { GET_INIT_LIST } from './actionTypes';

function* getInitList() {
  try {
    const data = ['hello', 'react', 'redux'];
    const action = initListAction(data);
    yield put(action);
  } catch(e) {
    console.log('请求失败');
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
