import axios from 'axios';
import { INIT_MENU_LIST, GET_MENU_LIST, TOGGLE_COLLAPSE } from './actionTypes';

export function getMenuList () {
  return (dispatch) => {
    axios.get(GET_MENU_LIST).then(res => {
      const result = res.data.data;
      const action = {
        type: INIT_MENU_LIST,
        value: result
      };
      dispatch(action);
    }).catch(err => {
      console.error(err);
    })
  };
}

export function handleCollapse () {
  return {
    type: TOGGLE_COLLAPSE
  };
}