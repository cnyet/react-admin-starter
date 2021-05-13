import styled from 'styled-components';

export const TodoWrapper = styled.div`
  margin: 50px;
  input {
    height:20px;
    width: 200px;
  }
  .btn {
    line-height: 20px;
    margin-left: 5px;
  }
  .list {
    margin-top: 30px;
    width: 300px;
    min-height: 30px;
    border: 1px solid #ccc;
  }
  .item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .item:last-child{
    border-bottom: 0;
  }
`;