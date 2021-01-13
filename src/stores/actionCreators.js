import { INPUT_CHANGE_VALUE, BUTTON_CLICK, DELETE_ITEM } from './actionTypes';

export function getInputChangeValue (value) {
  return {
    type: INPUT_CHANGE_VALUE,
    value
  };
};

export function handleButtonClick (value) {
  return {
    type: BUTTON_CLICK,
    value
  };
}

export function handleDeleteItem (value) {
  return {
    type: DELETE_ITEM,
    value
  };
}