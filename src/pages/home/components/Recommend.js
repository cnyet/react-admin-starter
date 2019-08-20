import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
  componentDidMount() {
    this.props.handleGetCommendList();
  }
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
      {
        recommendList.map(item => {
          return (
            <RecommendItem key={item.get('id')}>
              <img className='recommend-img' src={item.get('image_url')} alt='' />
            </RecommendItem>
          )
        })
      }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
});

const mapDispatch = (dispatch) => {
  return {
    handleGetCommendList() {
      dispatch(actionCreators.getCommendList());
    }
  };
};

export default connect(mapState, mapDispatch)(Recommend);