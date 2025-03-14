// Muestra los productos disponibles

// src/components/ProductList.jsx
import React from "react";
import { useCart } from "../../context/CartContext"; // Importa useCart desde el contexto
import { useTheme } from "../../context/ThemeContext";

const products = [
  { id: 1, name: "Refrigerador", price: 1200, image: "/src/assets/images/refrigerador.jpg" },
  { id: 2, name: "Microondas", price: 300, image: "/src/assets/images/microondas.jpg" },
  { id: 3, name: "Lavadora", price: 800, image: "/src/assets/images/lavadora.jpg" },
  { id: 4, name: "Secadora", price: 750, image: "/src/assets/images/secadora.jpg" },
  { id: 5, name: "Horno eléctrico", price: 400, image: "/src/assets/images/horno.jpg" },
  { id: 6, name: "Aspiradora", price: 250, image: "/src/assets/images/aspiradora.jpg" },
  { id: 7, name: "Licuadora", price: 150, image: "/src/assets/images/licuadora.jpg" },
  { id: 8, name: "Cafetera", price: 200, image: "/src/assets/images/cafetera.jpg" },
  { id: 9, name: "Tostadora", price: 100, image: "/src/assets/images/tostadora.jpg" },
  { id: 10, name: "Plancha", price: 90, image: "/src/assets/images/plancha.jpg" },
  { id: 11, name: "Televisor", price: 1300, image: "/src/assets/images/televisor.jpg" },
  { id: 12, name: "Parlante Bluetooth", price: 180, image: "/src/assets/images/parlante.jpg" },
  { id: 13, name: "Freidora de aire", price: 220, image: "/src/assets/images/freidora.jpg" },
  { id: 14, name: "Batidora", price: 140, image: "/src/assets/images/batidora.jpg" },
  { id: 15, name: "Ventilador", price: 160, image: "/src/assets/images/ventilador.jpg" },
  { id: 16, name: "Calefactor", price: 210, image: "/src/assets/images/calefactor.jpg" },
  { id: 17, name: "Humidificador", price: 130, image: "/src/assets/images/humidificador.jpg" },
  { id: 18, name: "Deshumidificador", price: 240, image: "/src/assets/images/deshumidificador.jpg" },
  { id: 19, name: "Robot aspiradora", price: 950, image: "/src/assets/images/robot.jpg" },
  { id: 20, name: "Extractor de jugo", price: 300, image: "/src/assets/images/extractor.jpg" },
  { id: 21, name: "Enfriador de aire", price: 400, image: "/src/assets/images/enfriador.jpg" },
  { id: 22, name: "Caldera", price: 1100, image: "/src/assets/images/caldera.jpg" },
  { id: 23, name: "Máquina de hielo", price: 600, image: "/src/assets/images/hielo.jpg" },
  { id: 24, name: "Máquina de coser", price: 500, image: "/src/assets/images/coser.jpg" },
  { id: 25, name: "Lavavajillas", price: 850, image: "/src/assets/images/lavavajillas.jpg" },
];


const ProductList = () => {
  const { addToCart } = useCart();
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen py-10 px-5 md:px-20 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h1 className="text-3xl font-bold text-center mb-8">Electrodomésticos Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className={`border rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain bg-white p-3"
            />
            <div className="p-4 flex flex-col justify-between h-40">
              <div>
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="font-bold text-blue-600">${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;