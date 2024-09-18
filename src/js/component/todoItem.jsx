// TodoItem.jsx
import React from 'react';

const TodoItem = ({ id, text, deleteTask }) => {
  return (
    <div className="todo-item" onMouseEnter={() => console.log('Mouse entered')} onMouseLeave={() => console.log('Mouse left')}>
      <span>{text}</span>
      <button className="delete-btn" onClick={() => deleteTask(id)}>
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
