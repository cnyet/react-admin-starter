import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends Component {
  componentDidMount() {
    this.props.handleGetWriterList();
  }
  render() {
    const { writerList } = this.props;
    console.log(writerList);
    return (
      <WriterWrapper>
        {
          writerList.map(item => {
            return (
              <WriterItem key={item.get('id')}>
                <img className='writer-img' src={item.get('image_url')} alt='' />
                <span className='writer-title'>{item.get('title')}</span>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  writerList: state.getIn(['home', 'writerList'])
});

const mapDispatch = (dispatch) => {
  return {
    handleGetWriterList() {
      dispatch(actionCreators.getWriterList())
    }
  }
};

export default connect(mapState, mapDispatch)(Writer);