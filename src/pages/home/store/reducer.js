import { fromJS } from 'immutable';
import { GetTopicList, GetArticleList } from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state=defaultState, action) => {
  switch(action.type) {
    case GetTopicList: 
    return state.set('topicList', action.data);
    case GetArticleList: 
    return state.set('articleList', action.data);
    default: 
    return state;
  }
}