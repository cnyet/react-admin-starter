import { fromJS } from 'immutable';  // immutable对象数据不能被修改，通调用get(), set() 操作
import { SearchFocus, SearchBlur, SearchItem, ChangePage, MouseEnter, MouseLeave } from './constants';
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  page: 1,
  totalPage: 1,
  list: []
});

export default (state = defaultState, action) => {
  // immutable 对象set方法会结合之前的imuutable对象的值生产一个新的对象    
  switch(action.type) {
    case SearchFocus: 
    return state.set('focused', true);
    case SearchBlur: 
    return state.set('focused', false);
    case ChangePage: 
    return state.set('page', action.data);
    case SearchItem: 
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    });
    case MouseEnter: 
    return state.set('mouseIn', true);
    case MouseLeave: 
    return state.set('mouseIn', false);
    default: 
    return state;
  }
};