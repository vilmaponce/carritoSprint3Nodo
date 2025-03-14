// src/components/Footer.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-400" : "bg-blue-600 text-white"
      } py-6 px-6 shadow-inner transition-colors duration-500`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center space-y-3">
        <p className="uppercase tracking-widest text-sm">
          DIPLOMATURA DESARROLLO WEB FULL STACK CON JAVASCRIPT
        </p>
        <p className="uppercase tracking-widest text-sm">VILMA PONCE</p>
        <a
          href="https://github.com/vilmaponce"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
        >
          <i className="bi bi-github"></i>
          <span className="font-['Orbitron']">github.com/vilmaponce</span>
        </a>
        <p>&copy; {currentYear}</p>

        {/* Botón de cambio de tema */}
        <button
          onClick={toggleTheme}
          className={`mt-4 px-4 py-2 ${
            isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-yellow-400 text-gray-900"
          } rounded-full transition-all duration-500 shadow-md flex items-center gap-2 hover:scale-105`}
        >
          <i className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
          {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;