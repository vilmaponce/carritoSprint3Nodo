import React from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Cierra el modal al hacer clic fuera
    >
      <div
        className="bg-gray-400 rounded-lg p-6 relative w-full max-w-3xl mx-4 max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
      >
        {/* Botón para cerrar el modal */}
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 font-bold bg-gray-300 text-gray-800 hover:text-gray-900 text-2xl"
        >
          &times;
        </Button>

        {/* Título del modal */}
        <h2 className="text-xl font-bold text-center mb-4">Carrito de Compras</h2>
        {/* Lista de productos en el carrito (contenido desplazable) */}
        <div className="overflow-y-auto flex-1 mb-4">
          {cart.length === 0 ? (
            <p className="text-red-800 font-bold text-2xl text-center">
              <i className="bi bi-cart text-4xl mb-2"></i><br />
              No hay productos en el carrito.
            </p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-center bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 space-y-4 sm:space-y-0 sm:space-x-4 mb-4"
              >
                {/* Imagen del producto */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                {/* Nombre y precio del producto */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p>${product.price}</p>
                </div>

                {/* Cantidad y botón Eliminar */}
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, Math.max(1, parseInt(e.target.value)))}
                    className="w-16 border p-1 rounded"
                  />
                  <span>${product.price * product.quantity}</span>
                  <Button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base"
                    icon="ph-trash"
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total del carrito (fijo en la parte inferior) */}
        <div className="bg-gray-300 p-4 rounded-lg sticky bottom-0">
          <button className="bg-green-600 hover:bg-green-700 p-2 mx-2 mt-2 item-center rounded-lg text-white text-sm sm:text-base"
          >Ir a Pagar</button>
          <div className="text-right">
            <strong>Total: ${totalPrice}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;