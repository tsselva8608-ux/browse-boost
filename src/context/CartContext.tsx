import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
  note: string;
  setNote: (note: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

const LS_KEY = "bb_cart_v1"; const LS_NOTE_KEY = "bb_cart_note_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  const [note, setNote] = useState<string>(() => {
    try {
      return localStorage.getItem(LS_NOTE_KEY) ?? "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(LS_NOTE_KEY, note);
  }, [note]);

  const addToCart = (product: Product, qty: number = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx >= 0) {
        const clone = [...prev];
        clone[idx] = { ...clone[idx], quantity: clone[idx].quantity + qty };
        return clone;
      }
      return [...prev, { product, quantity: qty }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQty = (productId: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: Math.max(1, qty) } : i))
    );
  };

  const clear = () => setItems([]);

  const { subtotal, count } = useMemo(() => {
    const subtotal = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
    const count = items.reduce((acc, i) => acc + i.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value: CartContextType = { items, addToCart, removeFromCart, updateQty, clear, subtotal, count, note, setNote };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
