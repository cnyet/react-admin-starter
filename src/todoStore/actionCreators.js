import { GET_INPUT_VALUE, INIT_LIST_ITEMS, GET_LIST_ITEMS, HANDLE_CHANGE_INPUT, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes';

export function initListItems() {
  return {
    type: INIT_LIST_ITEMS
  };
}

export function getInputValue(value) {
  return {
    type: GET_INPUT_VALUE,
    value
  }
}

export function handleChangeInput(value) {
  return {
    type: HANDLE_CHANGE_INPUT,
    value
  };
}

export function getListItems(value) {
  return {
    type: GET_LIST_ITEMS,
    value
  };
}

export function addListItem(value) {
  return {
    type: ADD_LIST_ITEM
  };
}

export function deleteListItem(index) {
  return {
    type: DELETE_LIST_ITEM,
    value: index
  };
}