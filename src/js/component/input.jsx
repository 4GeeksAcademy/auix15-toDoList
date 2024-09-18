import React, { useState } from "react";

const Input = ({ addTask }) => {
  // Estado local para controlar el valor del input
  const [inputValue, setInputValue] = useState("");

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

  // Función para manejar la tecla Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(inputValue); // Añade la tarea
      setInputValue(""); // Limpia el input
    }
  };

  return (
    <input
      type="text"
      placeholder="Añadir tarea..."
      value={inputValue} // Input controlado
      onChange={handleChange} // Controla el valor del input
      onKeyDown={handleKeyDown} // Añade la tarea al presionar Enter
    />
  );
};

export default Input;
