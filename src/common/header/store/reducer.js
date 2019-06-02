import { fromJS } from 'immutable';  // immutable对象数据不能被修改，通调用get(), set() 操作
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    // immutable 对象set方法会结合之前的imuutable对象的值生产一个新的对象    
    return state.set('focused', true);
  }
  if (action.type === 'search_blur') {
    return state.set('focused', false);
  }
  return state;
};