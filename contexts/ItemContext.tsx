"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Item } from "@/types/item";

interface ItemContextType {
  items: Item[];
  addItem: (item: Omit<Item, "id" | "createdAt">) => void;
  getItemById: (id: string) => Item | undefined;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

// Dummy data
const sampleItems: Item[] = [
  {
    id: "1",
    name: "Nike Air Max",
    type: "Shoes",
    description: "Comfortable running shoes with excellent cushioning",
    coverImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop",
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Adidas T-Shirt",
    type: "Shirt",
    description: "Lightweight and breathable sports t-shirt",
    coverImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=300&fit=crop",
    ],
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Yoga Mat",
    type: "Sports Gear",
    description: "Non-slip yoga mat perfect for home workouts",
    coverImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    ],
    createdAt: new Date("2024-01-25"),
  },
];

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Load items from localStorage or use sample data
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems).map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
      }));
      setItems(parsedItems);
    } else {
      setItems(sampleItems);
    }
  }, []);

  const addItem = (newItem: Omit<Item, "id" | "createdAt">) => {
    const item: Item = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: new Date(),
    };

    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const getItemById = (id: string) => {
    return items.find((item) => item.id === id);
  };

  return (
    <ItemContext.Provider value={{ items, addItem, getItemById }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
}
