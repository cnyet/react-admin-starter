/**
 * reducer 必须事纯函数
 * 给定固定的输入，就有固定的输出，不会有副作用
 * 不能有时间的操作，不能异步操作，不能有ajax操作，不能改变输入的参数
 * combineReducers 可以将拆分的小reducer整合在一起
 */
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';


export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});
