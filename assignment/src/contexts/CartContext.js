import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (food, quantity = 1) => {
    setCart(prev => {
      const found = prev.find(item => item.id === food.id);
      if (found) {
        return prev.map(item => item.id === food.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...food, quantity }];
    });
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);
  const updateQuantity = (id, quantity) => setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  const total = cart.reduce((sum, item) => sum + Number(item.currentPrice.replace(/\D/g, "")) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}
