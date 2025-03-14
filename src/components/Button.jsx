// src/components/Button.jsx
import React from "react";

const Button = ({ children, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 rounded-xl font-semibold shadow-md transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {icon && <i className={`bi ${icon} mr-2`}></i>}
      {children}
    </button>
  );
};

export default Button;
