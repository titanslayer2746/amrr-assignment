"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AMRR Item Management</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Manage your inventory with ease. Add new items and view your
            collection in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border">
            <div className="flex items-center justify-center mb-4">
              <Package className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">View Items</h2>
            <p className="text-gray-400 mb-6">
              Browse through all your items. Click on any item to see detailed
              information.
            </p>
            <Link href="/view-items">
              <Button className="w-full cursor-pointer">Browse Items</Button>
            </Link>
          </div>

          <div className="rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border">
            <div className="flex items-center justify-center mb-4">
              <Plus className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Add Item</h2>
            <p className="text-gray-400 mb-6">
              Add a new item to your collection with all the details and images.
            </p>
            <Link href="/add-item">
              <Button className="w-full cursor-pointer">Add New Item</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
