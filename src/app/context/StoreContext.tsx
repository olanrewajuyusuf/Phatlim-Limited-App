"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  name: string;
  type: string;
  image: string;
};

type StoreContextType = {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void; // ✅ Added
  toggleFavorite: (product: Product) => void;
  removeFavorite: (productName: string) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productName: string) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.filter((item) => item.name !== product.name);
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFavorite = (productName: string) => {
    setFavorites((prev) => prev.filter((item) => item.name !== productName));
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        removeFromCart, // ✅ Now exposed
        toggleFavorite,
        removeFavorite,
        clearCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
};
