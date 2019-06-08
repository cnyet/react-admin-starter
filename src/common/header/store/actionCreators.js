/**
 * 定义state派发的action 
 */
import { SearchFocus, SearchBlur, MouseEnter, ChangePage, MouseLeave, SearchItem } from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: SearchItem,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const focusAction = {
  type: SearchFocus
};

export const blurAction = {
  type: SearchBlur
};

export const mouseEnterAction = {
  type: MouseEnter
};

export const mouseLeaveAction = {
  type: MouseLeave
};

export const changePageAction =  (page) => ({
  type: ChangePage,
  data: page
})

export const getList = (page) => {
  const instance = axios.create({
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  });
  return (dispatch) => {
    instance.get('api/list.json', {
      params: {
        page: page,
        pageSize: 10
      }
    }).then(res => {
      const list = res.data.data;
      dispatch(changeList(list));
    }).catch(err => {

    })
  }
};