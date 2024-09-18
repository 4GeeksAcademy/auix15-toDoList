import React, { useState } from "react";

const Input = ({ addTask }) => {
  
  const [inputValue, setInputValue] = useState("");

  
  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(inputValue); 
      setInputValue(""); 
    }
  };

  return (
    <input
      type="text"
      placeholder="Añadir tarea..."
      value={inputValue} 
      onChange={handleChange} 
      onKeyDown={handleKeyDown} 
    />
  );
};

export default Input;
