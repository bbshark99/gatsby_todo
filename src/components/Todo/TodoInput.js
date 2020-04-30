import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from './../Style';

const Input = styled.input`
  border: 2px solid rebeccapurple;
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0.2em;
  padding-right: 0;
  transition: 0.3s;

  :hover {
    border-color: #663399c9;
  }
`;
const Button = styled.button`
  padding: 0.1em;
  background: rebeccapurple;
  color: white;
  font-size: 1em;
  margin: 0.1em;
  margin-left: 0;
  padding: 0.25em 1em;
  border: 2px solid rebeccapurple;
  border-radius: 3px;
  transition: 0.3s;

  :hover {
    background: white;
    color: rebeccapurple;
  }
`;

function TodoInput({ onAddTodoItem }) {
  const [todo, setTodo] = useState('');
  const onChange = e => {
    setTodo(e.target.value);
  };
  const onSubmit = () => {
    onAddTodoItem(todo);
    setTodo('');
  };
  return (
    <Box>
      <Input type="text" value={todo} onChange={onChange} />
      <Button onClick={onSubmit}>Add</Button>
    </Box>
  );
}

export default TodoInput;
