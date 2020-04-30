import React, { useState } from 'react';
import TodoInput from './../components/Todo/TodoInput';
import TodoList from './../components/Todo/TodoList';

function TodoContainers() {
  const [todos, setTodos] = useState([]);
  const onAddTodoItem = todo => {
    const newTodos = todos.concat(todo);
    setTodos(newTodos);
  };
  return (
    <>
      <TodoInput onAddTodoItem={onAddTodoItem} />
      <TodoList todos={todos} />
    </>
  );
}

export default TodoContainers;
