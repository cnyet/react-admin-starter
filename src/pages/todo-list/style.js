import styled from 'styled-components';
import 'antd/dist/antd.min.css';

export const TodoWrapper = styled.div`
  margin: 50px;
  .input{
    width: 200px;
  }
  .btn{
    line-height: 20px;
    margin-left: 10px;
  }
  .list{
    margin-top: 30px;
    width: 200px;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    opacity: 1;
    transition: opacity 1s ease-in;
  }
  .fade-enter-done{
    opacity: 1;
  }
  .fade-exit{
    opacity: 1;
  }
  .fade-exit-active{
    opacity: 0;
    transition: opacity 1s ease-in;
  }
  .fade-exit-done{
    opacity: 0;
  }
`;

export const TodoGroup = styled.ul`
  list-style: none;
  .list-item{

  }
`;