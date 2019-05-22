/**
 * store 是唯一的
 * store 里的数据只有store自己能更新
 * createStore 创建store
 * store.dispatch 出发action改变store
 * store.getState 接受store里的数据
 * store.subscribe 订阅store数据的变化，回调函数执行
 */
import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

export default store;

