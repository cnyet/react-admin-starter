import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  line-height: 1.2;
  margin: 50px auto;
`;

export const Header = styled.h3`
  font-size: 30px;
  color: #333333;
  font-weight: bold;
`;
  
export const Author = styled.div`
  margin: 30px 0;
  font-size: 16px;
  padding-left: 60px;
  overflow: hidden;
  .author-avatar{
    width: 48px;
    height: 48px;
    float: left;
    margin-left: -60px;
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .author-info{
    vertical-align: middle;
    margin-left: 8px;
    .author-name{
      line-height: 30px;
    }
    .author-desc{
       font-size: 14px;
       color: #666666;
    }
  }
`;

export const Content = styled.div`
  p {
    line-height: 1.5;
    margin: 15px 0;
  }
`;

export const Reference = styled.div`
  width: 100%;
  padding: 26px 72px;
  box-sizing: border-box;
  background: #f8fafc;
  border-radius: 8px;
  margin: 32px 0 28px;
  position: relative;
  .bg {
    width: 60px;
    height: 48px;
    position: absolute;
  }
  .bg.bg1 {
    top: -12px;
    left: 24px;
  }
  .bg.bg2 {
    bottom: -12px;
    right: 24px;
  }
  .famous-word {
    font-size: 16px;
    color: #1c1f21;
    text-align: left;
    line-height: 24px;
  }
  .famous-word .author {
    text-align: right;
  }
`;