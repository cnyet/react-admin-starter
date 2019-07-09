import axios from 'axios';
import { GetTopicList, GetArticleList, GetRecommendList, GetWriterList } from './constants';
import { fromJS } from 'immutable';

export const topicAction = (data) => ({
  type: GetTopicList,
  data: fromJS(data)
});

export const articleAction = (data) => ({
  type: GetArticleList,
  data: fromJS(data)
});

export const recommendAction = (data) => ({
  type: GetRecommendList,
  data: fromJS(data)
});

export const writerAction = (data) => ({
  type: GetWriterList,
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
};

export const getCommendList = () => {
  return (dispatch) => {
    axios.get('api/recommend.json').then(res => {
      const data = res.data.data;
      dispatch(recommendAction(data));
    }).catch(err => {
      console.log('fail');
    });
  }
};

export const getWriterList = () => {
  return (dispatch) => {
    axios.get('api/writer.json').then(res => {
      const data = res.data.data;
      dispatch(writerAction(data));
    }).catch(err => {
      console.log('fail');
    });
  }
}