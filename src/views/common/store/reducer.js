import { INIT_MENU_LIST, TOGGLE_COLLAPSE } from './actionTypes';

const defaultStates = {
  collapsed: false,
  menus: []
};

function reducer (state = defaultStates, action) {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === INIT_MENU_LIST) {
    newState.menus = action.value;
    return newState;
  }
  if (action.type === TOGGLE_COLLAPSE) {
    newState.collapsed = action.value;
    return newState;
  }
  return newState;
}

export default reducer;