import axios from 'axios';
import { GetTopicList, GetArticleList } from './constants';
import { fromJS } from 'immutable';

export const topicAction = (data) => ({
  type: GetTopicList,
  data: fromJS(data)
});

export const articleAction = (data) => ({
  type: GetArticleList,
  data: fromJS(data)
});

export const getTopicList = () => {
  return (dispatch) => {
    axios.get('api/topicList.json').then(res => {
      const data = res.data.data;
      dispatch(topicAction(data));
    }).catch(err => {
      console.log('fail');
    });
  }
};

export const getArticleList = () => {
  return (dispatch) => {
     axios.get('api/articleList.json').then(res => {
      const data = res.data.data;
      dispatch(articleAction(data));
    }).catch(err => {
      console.log('fail');
    });
  }
}