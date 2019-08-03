import axios from 'axios';
import { fromJS } from 'immutable';
import { GetDetailData } from './constants';

export const detailAction = (data) => ({
  type: GetDetailData,
  data: fromJS(data)
});

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
      const data = res.data.data;
      dispatch(detailAction(data));
    }).catch(err => {
      console.log('fail');
    });
  }
};