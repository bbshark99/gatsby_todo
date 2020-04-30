import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.1rem solid gray;
  padding: 1rem;
  margin-top: 1rem;
`;

function TodoList({ todos }) {
  return (
    <Box>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </Box>
  );
}

export default TodoList;
