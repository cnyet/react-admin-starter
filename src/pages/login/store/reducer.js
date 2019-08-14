import { fromJS } from 'immutable';
import { SetLogin, SetLogout } from './constants';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case SetLogin:
      return state.set('login', action.data);
    case SetLogout:
      return state.set('login', action.data);
    default: 
      return state;
  }
};