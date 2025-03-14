import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // true: Login, false: Signup

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Cierra el modal al hacer clic fuera
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-2xl transform transition-all duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
      >
        {/* Título del modal */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </h2>

        {/* Formulario de autenticación */}
        <form>
          {/* Campo de correo electrónico */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Correo electrónico
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* Campo de contraseña */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="********"
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </form>

        {/* Cambiar entre Login y Signup */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          {isLogin ? "¿No tienes una cuenta? " : "¿Ya tienes una cuenta? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 font-semibold transition-colors"
          >
            {isLogin ? "Crear Cuenta" : "Iniciar Sesión"}
          </button>
        </p>

        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl transition-colors"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default AuthModal;