import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Cargar desde localStorage si existe
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Guardar en localStorage cuando cambia
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pizza) => {
    const existing = cart.find((item) => item.id === pizza.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart(cart.filter((item) => item.id !== pizzaId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
