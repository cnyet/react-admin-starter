import { fromJS } from 'immutable';
import { GetDetailData } from './constants';

const defaultState = fromJS({
  detailData: {}
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case GetDetailData: 
    return state.set('detailData', action.data);
    default: 
    return state;
  }
}