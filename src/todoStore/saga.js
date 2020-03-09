import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { INIT_LIST_ITEMS, GETLISTITEMS } from './actionTypes';
import { getListItems } from './actionCreators';

function* initTodoSage() {
  try {
    const result = yield axios.get(GETLISTITEMS);
    const action = getListItems(result.data.data);
    yield put(action);
  } catch (err) {
    console.log(err);
  }
}

function* initList() {
  yield takeEvery(INIT_LIST_ITEMS, initTodoSage);
}

export default initList;