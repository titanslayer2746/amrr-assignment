"use client";

import { useState } from "react";
import { useItems } from "@/contexts/ItemContext";
import ItemDetailDialog from "@/components/ItemDetailDialog";

export default function ViewItemsPage() {
  const { items } = useItems();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">View Items</h1>
              <p className="text-gray-400 mt-2">
                Browse through your item collection. Click on any item to see
                detailed information.
              </p>
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-400 mb-6">
              Get started by adding your first item.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border"
                onClick={() => handleItemClick(item.id)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 truncate">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.type}</p>
                  <p className="text-xs text-gray-500">
                    Added: {item.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <ItemDetailDialog
          itemId={selectedItemId}
          onClose={() => setSelectedItemId(null)}
        />
      </div>
    </div>
  );
}
