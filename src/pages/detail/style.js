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