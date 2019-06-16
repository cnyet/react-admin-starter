import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 20px auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  .homeLink{
    display: block;
    margin-bottom: 20px;
  }
  .banner-img{
    width: 100%;
    height: auto;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
`;

export const TopicItem = styled.span`
  height: 30px;
  display: inline-block;
  border: 1px #dcdcdc solid;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-right: 15px;
  overflow: hidden;
  .topic-img{
    width: 28px;
    height: 28px;
    display: inline-block;
    background-color: #eee;
  }
  .topic-title{
    display: inline-block;
    line-height: 28px;
    vertical-align: top;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ListWrapper = styled.ul`
  padding: 20px 0;
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
`;

export const ListItemImg = styled.a`
  position: absolute;
  top: 50%;
  margin-top: -60px;
  right: 0;
  width: 150px;
  height: 100px;
  color: #666;
  text-decoration: none;
  .list-img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;

export const ListItemInfo = styled.div`
  padding-right: 165px;
`;

export const ListItemTitle = styled.a`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #666;
  text-decoration: none;
`;

export const ListItemContent = styled.div`
  .content{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .meta{
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const RecommendWrapper = styled.div`
  height: 270px;
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
`;

export const WriterWrapper = styled.div`
  height: 300px;
  border: 1px solid #f0f0f0;
`;