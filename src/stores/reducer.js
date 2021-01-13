import { INPUT_CHANGE_VALUE, BUTTON_CLICK, DELETE_ITEM } from './actionTypes';

const defaultStates = {
  inputValue: 'todo list',
  list: [1, 2, 3]
};

function reducer (state = defaultStates, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === INPUT_CHANGE_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === BUTTON_CLICK) {
    if (action.value !== '') {
      newState.list.push(action.value);
    }
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    newState.list.splice(action.value, 1);
    return newState;
  }
  return newState;
}

export default reducer;