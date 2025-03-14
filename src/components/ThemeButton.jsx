//Botón para cambiar el tema
// src/components/ThemeButton.jsx

import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
    >
      {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default ThemeButton;