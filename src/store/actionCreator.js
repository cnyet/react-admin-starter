import axios from 'axios';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST, INIT_LIST_ACTION } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (value) => ({
  type: INIT_LIST_ACTION,
  value
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});

// redux-thunk异步处理
export const getTodoList = () => {
  return (dispatch) => {
    const data = ['hello', 'react', 'redux'];
    const action = initListAction(data);
    dispatch(action);
    // const instance = axios.create({
    //   baseURL: 'http://localhost.charlesproxy.com',
    // });
    // instance.get('/list').then(res => {
    //   console.log(res);
    //   const data = res;
    //   const action = initListAction(data);
    //   dispatch(action);
    // }).catch(err => {
    //   console.log(err);
    // });
  };

  // reduc-saga 异步处理

}
