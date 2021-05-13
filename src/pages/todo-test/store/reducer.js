import { INPUT_CHANGE_VALUE } from './actionTypes';

const defaultStore = {
  btnText: '添加',
  inputValue: 'todo redux',
  list: [1, 2, 3]
}

function reducer(state = defaultStore, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === INPUT_CHANGE_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }
  return state;
}

export default reducer;