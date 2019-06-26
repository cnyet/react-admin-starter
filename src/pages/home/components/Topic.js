import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

class Topic extends PureComponent {
  componentDidMount() {
    this.props.handleGetTopic();
  }
  render() {
    const { topicList } = this.props;
    const topicSize = topicList.toJS();
    if (topicSize.length) {
      return (
        <TopicWrapper>
        {
          topicList.map(item => {
            return (
              <TopicItem key={item.get('id')}>
                <img className='topic-img' src={item.get('imgUrl')} alt='' />
                <span className='topic-title'>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
        </TopicWrapper>
      )
    } else {
      return null;
    }
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
});

const mapDispatch= (dispatch) => {
  return {
    handleGetTopic() {
      dispatch(actionCreators.getTopicList());
    }
  }
};

export default connect(mapState, mapDispatch)(Topic);