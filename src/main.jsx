//Renderiza la aplicación
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext"; // Importa ThemeProvider
import './index.css'; // 👈  CSS de tailwind
import "bootstrap-icons/font/bootstrap-icons.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);