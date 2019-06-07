import { fromJS } from 'immutable';  // immutable对象数据不能被修改，通调用get(), set() 操作
import { SearchFocus, SearchBlur, SearchItem } from './constants';
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === SearchFocus) {
    // immutable 对象set方法会结合之前的imuutable对象的值生产一个新的对象    
    return state.set('focused', true);
  }
  if (action.type === SearchBlur) {
    return state.set('focused', false);
  }
  if (action.type === SearchItem) {
    return state.set('list', action.data);
  }
  return state;
};