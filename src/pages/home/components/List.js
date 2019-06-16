import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ListWrapper, ListItem, ListItemImg, ListItemInfo, ListItemTitle, ListItemContent } from '../style';

class List extends Component {
  componentDidMount() {
    this.props.handleGetArticleList();
  }
  render() {
    const { articleList } = this.props;
    const articleSize = articleList.toJS();
    console.log(articleList);
    if (articleSize.length) {
      return (
        <ListWrapper>
        {
          articleList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <ListItemImg href={item.get('href')}>
                  <img className="list-img" src={item.get('imgUrl')} alt='' />
                </ListItemImg>
                <ListItemInfo>
                  <ListItemTitle href={item.get('href')}>{item.get('title')}</ListItemTitle>
                  <ListItemContent>
                    <p className="content">{item.get('info')}</p>
                    <p className="meta">{item.get('author')}</p>
                  </ListItemContent>
                </ListItemInfo>
              </ListItem>
            );
          })
        }
        </ListWrapper>
      )
    } else {
      return null;
    }
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
});

const mapDispatch = (dispatch) => {
  return {
    handleGetArticleList() {
      dispatch(actionCreators.getArticleList());
    }
  }
};

export default connect(mapState, mapDispatch)(List);