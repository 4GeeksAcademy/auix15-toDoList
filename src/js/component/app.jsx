// App.jsx
import React, { useState } from "react";
import TodoList from "./todoList";
import Input from "./input"; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea
  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, id: Date.now() }]);
    }
  };

  // Función para eliminar una tarea
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <Input addTask={addTask} />
      {/* Expresión para contar las tareas */}
      <p>{tasks.length} {tasks.length === 1 ? "tarea" : "tareas"} pendientes</p>
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
