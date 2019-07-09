import { fromJS } from 'immutable';
import { GetTopicList, GetArticleList, GetRecommendList, GetWriterList } from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
});

export default (state=defaultState, action) => {
  switch(action.type) {
    case GetTopicList: 
    return state.set('topicList', action.data);
    case GetArticleList: 
    return state.set('articleList', action.data);
    case GetRecommendList:
    return state.set('recommendList', action.data);
    case GetWriterList:
    return state.set('writerList', action.data);
    default: 
    return state;
  }
}