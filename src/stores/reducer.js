const defaultStates = {
  inputValue: 'todo list',
  data: [1,2,3]
};

function reducer (state = defaultStates, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'input_change_value') {
    newState.inputValue = action.value;
    return newState
  }
  if (action.type === 'button_click') {
    newState.data.push(action.value);
    return newState;
  }
  return state;
}

export default reducer;