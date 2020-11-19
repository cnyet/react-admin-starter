import { INPUT_CHANGE_VALUE, BUTTON_CLICK, DELETE_ITEM, INIT_LIST_DATA } from './actionTypes';

const defaultStates = {
  inputValue: 'todo list',
  data: [1,2,3]
};

function reducer (state = defaultStates, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === INPUT_CHANGE_VALUE) {
    newState.inputValue = action.value;
    return newState
  }
  if (action.type === BUTTON_CLICK) {
    newState.data.push(action.value);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    newState.data.splice(action.value, 1);
    return newState;
  }
  if (action.type === INIT_LIST_DATA) {
    newState.data = action.value;
    return newState;
  }
  return state;
}

export default reducer