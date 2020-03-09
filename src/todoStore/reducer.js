import { INPUT_CHANGE_VALUE, GET_LIST_ITEM, GET_LIST_ITEMS, HANDLE_CHANGE_INPUT, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes';

const defaultStates = {
  inputValue: 'todo list',
  data: [1,2,3]
};

function reducer (state = defaultStates, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === GET_LIST_ITEMS) {
    newState.data = action.value;
    return newState;
  }
  if (action.type === HANDLE_CHANGE_INPUT) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_LIST_ITEM) {
    newState.data.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_LIST_ITEM) {
    newState.data.splice(action.value, 1);
    return newState;
  }
  return state;
}

export default reducer;