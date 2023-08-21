import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  const updateTodo = (oldTodo, newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === oldTodo) {
        return newTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div className="todos">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={(newTodo) => updateTodo(todo, newTodo)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;