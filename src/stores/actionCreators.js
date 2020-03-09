import axios from 'axios';
import { INPUT_CHANGE_VALUE, BUTTON_CLICK, DELETE_ITEM, INIT_LIST_DATA, GET_LIST_ITEM, GETLISTDATA } from './actionTypes';

export function getInputChangeValue (value) {
  return {
    type: INPUT_CHANGE_VALUE,
    value
  };
}

export function handleButtonClick(value) {
  return {
    type: BUTTON_CLICK,
    value
  };
}

export function handleDeleteItem(value) {
  return {
    type: DELETE_ITEM,
    value
  };
}

export function getListItems() {
  return {
    type: GET_LIST_ITEM
  };
}

export function getListData() {
  return (dispatch) => {
    axios.get(GETLISTDATA).then(res => {
      const result = res.data;
      const action = {
        type: INIT_LIST_DATA,
        value: result.data
      };
      dispatch(action);
    }).catch(err => {
      console.log(err);
    });
  }
}