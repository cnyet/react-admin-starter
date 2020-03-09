import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { INIT_LIST_DATA, GETLISTDATA, GET_LIST_ITEM } from './actionTypes';
import { getListItems } from './actionCreators';

function* initList() {
  yield takeEvery(GET_LIST_ITEM, getListData);
}

function* getListData() {
  try {
    const result = yield axios.get(GETLISTDATA);
    const action = {
      type: INIT_LIST_DATA,
      value: result.data.data
    };
    yield put(action);
  } catch(err) {
    console.log('请求失败');
  };
}

export default initList;