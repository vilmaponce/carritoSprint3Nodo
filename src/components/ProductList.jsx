import React from "react";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";


const products = [
  { id: 1, name: "Refrigerador", price: 1200, image: "/images/refrigerador.jpg", quantity: 1 },
  { id: 2, name: "Microondas", price: 300, image: "/images/microondas.jpg", quantity: 1 },
  { id: 3, name: "Lavadora", price: 800, image: "/images/lavadora.jpg", quantity: 1 },
  { id: 4, name: "Secadora", price: 750, image: "/images/secadora.jpg", quantity: 1 },
  { id: 5, name: "Horno eléctrico", price: 400, image: "/images/horno.jpg", quantity: 1 },
  { id: 6, name: "Aspiradora", price: 250, image: "/images/aspiradora.jpg", quantity: 1 },
  { id: 7, name: "Licuadora", price: 150, image: "/images/licuadora.jpg", quantity: 1 },
  { id: 8, name: "Cafetera", price: 200, image: "/images/cafetera.jpg", quantity: 1 },
  { id: 9, name: "Tostadora", price: 100, image: "/images/tostadora.jpg", quantity: 1 },
  { id: 10, name: "Plancha", price: 90, image: "/images/plancha.jpg", quantity: 1 },
  { id: 11, name: "Televisor", price: 1300, image: "/images/televisor.jpg", quantity: 1 },
  { id: 12, name: "Parlante Bluetooth", price: 180, image: "/images/parlante.jpg", quantity: 1 },
  { id: 13, name: "Freidora de aire", price: 220, image: "/images/freidora.jpg", quantity: 1 },
  { id: 14, name: "Batidora", price: 140, image: "/images/batidora.jpg", quantity: 1 },
  { id: 15, name: "Ventilador", price: 160, image: "/images/ventilador.jpg", quantity: 1 },
  { id: 16, name: "Calefactor", price: 210, image: "/images/calefactor.jpg", quantity: 1 },
  { id: 17, name: "Humidificador", price: 130, image: "/images/humidificador.jpg", quantity: 1 },
  { id: 18, name: "Deshumidificador", price: 240, image: "/images/deshumidificador.jpg", quantity: 1 },
  { id: 19, name: "Robot de cocina", price: 950, image: "/images/robot.jpg", quantity: 1 },
  { id: 20, name: "Extractor de jugo", price: 300, image: "/images/extractor.jpg", quantity: 1 },
  { id: 21, name: "Enfriador de aire", price: 400, image: "/images/enfriador.jpg", quantity: 1 },
  { id: 22, name: "Caldera", price: 1100, image: "/images/caldera.jpg", quantity: 1 },
  { id: 23, name: "Máquina de hielo", price: 600, image: "/images/hielo.jpg", quantity: 1 },
  { id: 24, name: "Máquina de coser", price: 500, image: "/images/coser.jpg", quantity: 1 },
  { id: 25, name: "Lavavajillas", price: 850, image: "/images/lavavajillas.jpg", quantity: 1 },
];

const ProductList = () => {
  const { addToCart } = useCart();
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen py-10 px-5 md:px-20 bg-gray-300 dark:bg-gray-500 text-black dark:text-white transition-colors duration-500">
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 text-center mb-8 transition-all duration-300 transform hover:scale-110 group text-shadow-red px-4">
          Electrodomésticos Disponibles!!!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-white p-4"
              />
              <div className="p-4 flex flex-col justify-between h-44">
                <div>
                  <h2 className="text-lg font-semibold mb-1 truncate">{product.name}</h2>
                  <p className="font-bold text-blue-600 dark:text-blue-400">${product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors w-full"
                >
                  Agregar al carrito
                </button>
              </div>

              {/* Etiqueta oferta (opcional decorativo) */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                Oferta
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;