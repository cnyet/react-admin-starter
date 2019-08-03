import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { DetailWrapper, Header, Author, Content } from './style';

class Detail extends PureComponent {
  componentDidMount() {
    this.props.handleDetailData();
  }
  render() {
    const id = this.props.match.params.id;
    const { detailData } = this.props;
    if (detailData.size) {
      return (
        <DetailWrapper>
          <Header>{detailData.get('title')}</Header>
          <Author>
            <img className="author-avatar" src={detailData.get('avatar')} alt="avatar"/>
            <div className="author-info">
              <div className="author-name">{detailData.get('author')}</div>
              <div className="author-desc">{id} - 阅读：{detailData.get('page_view')}</div>
            </div>
          </Author>
          <Content>
            <img src={detailData.get('article_img_01')} alt="article_img"/>
            <p>{detailData.get('article_paragraph_01')}</p>
            <p>{detailData.get('article_paragraph_02')}</p>
          </Content>
        </DetailWrapper>
      );
    } else {
      return '暂无内容';
    }
  }
}

const mapState = (state) => ({
  detailData: state.getIn(['detail', 'detailData'])
});

const mapDispatch = (dispatch) => {
  return {
    handleDetailData() {
      dispatch(actionCreaters.getDetailData());
    }
  }
};

export default connect(mapState, mapDispatch)(Detail);