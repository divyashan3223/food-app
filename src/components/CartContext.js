// CartContext.js
import React, { createContext, useState } from "react";

// Create a new context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Value object to provide to consumers of the context
  const value = {
    cartItems,
    addItem,
    removeItem,
    clearCart,
  };

  // Provide the value to children components
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
