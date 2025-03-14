import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext"; // Importa useAuth
import AuthModal from "./AuthModal"; // Importa el modal de autenticación

const Header = ({ onOpenModal }) => {
  const { cart } = useCart();
  const { isDarkMode } = useTheme();
  const { isAuthModalOpen, openAuthModal, closeAuthModal } = useAuth(); // Usa el contexto de autenticación
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMyPurchasesOpen, setIsMyPurchasesOpen] = useState(false);

  const handleMyPurchasesClick = () => {
    if (isAuthenticated) {
      // Si está autenticado, muestra el historial de compras
      setIsMyPurchasesOpen(true);
    } else {
      // Si no está autenticado, muestra el modal de autenticación
      openAuthModal(); // Abre el modal de autenticación
    }
  };

  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
      } shadow-lg transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <i className="bi bi-house-gear-fill text-3xl text-yellow-400"></i>
          <span>NodoShop</span>
        </div>

        {/* Menú de navegación (desktop) */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={openAuthModal} // Abre el modal de autenticación
            className="hover:text-yellow-400 transition-colors"
          >
            Creá tu cuenta
          </button>
          <button
            onClick={openAuthModal} // Abre el modal de autenticación
            className="hover:text-yellow-400 transition-colors"
          >
            Ingresá
          </button>
          <button
            onClick={handleMyPurchasesClick}
            className="hover:text-yellow-400 transition-colors"
          >
            Mis compras
          </button>
        </nav>

        {/* Iconos de carrito y menú móvil */}
        <div className="flex items-center space-x-4">
          {/* Botón del carrito */}
          <button
            onClick={onOpenModal}
            className="relative p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <i className="bi bi-cart4 text-2xl text-yellow-400"></i>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </button>

          {/* Botón del menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <i className="bi bi-list text-2xl text-yellow-400"></i>
          </button>
        </div>
      </div>

      {/* Menú móvil (responsive) */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-blue-700 text-white"
          } transition-colors duration-500`}
        >
          <button
            onClick={openAuthModal} // Abre el modal de autenticación
            className="block px-4 py-2 hover:bg-blue-600 transition-colors w-full text-left"
          >
            Creá tu cuenta
          </button>
          <button
            onClick={openAuthModal} // Abre el modal de autenticación
            className="block px-4 py-2 hover:bg-blue-600 transition-colors w-full text-left"
          >
            Ingresá
          </button>
          <button
            onClick={handleMyPurchasesClick}
            className="block px-4 py-2 hover:bg-blue-600 transition-colors w-full text-left"
          >
            Mis compras
          </button>
        </div>
      )}

      {/* Modal de autenticación */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </header>
  );
};

export default Header;