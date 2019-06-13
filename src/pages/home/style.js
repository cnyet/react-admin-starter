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