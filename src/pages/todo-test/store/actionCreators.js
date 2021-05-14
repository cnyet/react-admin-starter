import axios from 'axios';
import { INPUT_CHANGE_VALUE, BUTTON_CLICK, DELETE_ITEM, GET_LIST_ITEM } from './actionTypes';

export function getInputChangeValue (value) {
  return {
    type: INPUT_CHANGE_VALUE,
    value
  }
}

export function buttonClickHandle (value) {
  return {
    type: BUTTON_CLICK,
    value
  }
}

export function deleteItemHandle (value) {
  return {
    type: DELETE_ITEM,
    value
  }
}

export function getListItem (value) {
  return {
    type: GET_LIST_ITEM,
    value
  };
}

export function initListData () {
  return (dispatch) => {
    axios.get('api/list.json').then(res => {
      const data = res.data.data;
      dispatch(getListItem(data));
    }).catch(err => {
      console.log('error');
    })
  }
}