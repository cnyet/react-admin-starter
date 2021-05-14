import { INPUT_CHANGE_VALUE, GET_LIST_ITEM, BUTTON_CLICK, DELETE_ITEM } from './actionTypes';

const defaultStore = {
  btnText: '添加',
  inputValue: 'todo redux',
  list: []
}

function reducer(state = defaultStore, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === INPUT_CHANGE_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === GET_LIST_ITEM) {
    newState.list = action.value;
    return newState;
  }
  if (action.type === BUTTON_CLICK) {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    newState.list.splice(action.value, 1);
    return newState;
  }
  return state;
}

export default reducer;