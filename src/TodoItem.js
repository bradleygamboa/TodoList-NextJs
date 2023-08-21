import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedTodo(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onUpdate(editedTodo); // Call the onUpdate function to update the todo value
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={handleInputChange}
        />
      ) : (
        <span>{todo}</span>
      )}
      <button onClick={() => onDelete(todo)}>Delete</button>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default TodoItem;