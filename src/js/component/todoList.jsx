// TodoList.jsx
import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>Descansa. No hay nada pendiente ;)</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            deleteTask={removeTask}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
