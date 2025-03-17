import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext"; // Importa AuthProvider

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider> {/* Envuelve la aplicación con ..Provider */}
      <CartProvider>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header onOpenModal={() => setIsCartOpen(true)} />
            <ProductList />
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Footer />
          </div>
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;