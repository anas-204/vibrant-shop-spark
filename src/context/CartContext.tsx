import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useNavigate } from "react-router-dom";

export interface CartItem {
  id: string; // Adding an ID to uniquely identify items
  title: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity' | 'id'> & { id?: string }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const addToCart = (item: Omit<CartItem, 'quantity' | 'id'> & { id?: string }) => {
    // generate a simple id if not provided, usually title is fine for this simple demo
    const id = item.id || item.title; 
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, id, quantity: 1 }];
    });
    
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
      action: <ToastAction altText="Go to cart" onClick={() => navigate("/cart")}>Go to Cart</ToastAction>,
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => {
      const item = prevCart.find(i => i.id === id);
      if (item) {
        toast({
          title: "Removed from cart",
          description: `${item.title} has been removed.`,
          variant: "destructive",
        });
      }
      return prevCart.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
