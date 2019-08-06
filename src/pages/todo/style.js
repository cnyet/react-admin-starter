import styled from 'styled-components';

export const TodoWrapper = styled.div`
  margin: 50px;
  line-height: 30px;
  .todo-input{
    width: 200px;
    height: 26px;
    padding: 0;
  }
  .todo-btn{
    height: 30px;
    margin-left: 10px;
  }
`;

export const TodoList = styled.ul`
  margin-top: 15px;
  li {
    list-style-type: disc;
  }
`;