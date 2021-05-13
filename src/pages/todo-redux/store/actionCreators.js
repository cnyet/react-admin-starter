import { INPUT_CHANGE_VALUE, BUTTON_CLICK, DELETE_ITEM, INIT_LIST_DATA, GET_LIST_ITEM } from './actionTypes';

export function getInputChangeValue(value) {
  return {
    type: INPUT_CHANGE_VALUE,
    value
  };
}