/**
 * 定义state派发的action 
 */
import { SearchFocus, SearchBlur, SearchItem } from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const focusAction = {
  type: SearchFocus
};

export const blurAction = {
  type: SearchBlur
};

const changeList = (data) => ({
  type: SearchItem,
  data: fromJS(data)
});

export const getList = () => {
  const instance = axios.create({
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  });
  return (dispatch) => {
    instance.get('api/list.json').then(res => {
      const list = res.data.data;
      dispatch(changeList(list));
    }).catch(err => {

    })
  }
};