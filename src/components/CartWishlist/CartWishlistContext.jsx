import React, { createContext, useState, useContext } from "react";

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.product_id === product.product_id)
        ? prevWishlist
        : [...prevWishlist, product]
    );
  };

  return (
    <CartWishlistContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
      {children}
    </CartWishlistContext.Provider>
  );
};
