import { createContext, useContext, useState } from "react";

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    if (!cart.some((item) => item.product_id === product.product_id)) {
      setCart([...cart, product]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.product_id === product.product_id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product_id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.product_id !== productId));
  };

  const clearCart = () => {
    setCart([]); 
  };

  return (
    <CartWishlistContext.Provider
      value={{
        cart,
        wishlist,
        clearCart,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};
