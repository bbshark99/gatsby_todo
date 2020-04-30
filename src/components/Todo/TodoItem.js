import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  p {
    padding: 0.1em;
    margin: 0;
    font-size: 1em;
    padding: 0.25em 1em;
    margin-top: 0.1em;
  }
  button {
    padding: 0.1em;
    background: rebeccapurple;
    color: white;
    font-size: 1em;
    margin: 0.1em;
    padding: 0.25em 1em;
    border: 2px solid rebeccapurple;
    border-radius: 3px;
    transition: 0.3s;
  }
  button:hover {
    background: white;
    color: rebeccapurple;
  }
`;

function TodoItem({ todo }) {
  const onDel = () => {
    console.log('Delete :', todo);
  };
  return (
    <Box>
      <p>{todo}</p>
      &nbsp;
      <button onClick={onDel}>Del</button>
    </Box>
  );
}

export default TodoItem;
