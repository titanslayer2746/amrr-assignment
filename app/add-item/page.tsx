"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useItems } from "@/contexts/ItemContext";
import { Plus, X } from "lucide-react";
import { ItemType } from "@/types/item";
import { toast } from "sonner";

export default function AddItemPage() {
  const router = useRouter();
  const { addItem } = useItems();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "" as ItemType,
    description: "",
    coverImage: "",
    additionalImages: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      addItem(formData);
      toast.success("Item successfully added");

      // Reset form
      setFormData({
        name: "",
        type: "" as ItemType,
        description: "",
        coverImage: "",
        additionalImages: [],
      });

      // Redirect to view items after a short delay
      setTimeout(() => {
        router.push("/view-items");
      }, 1500);
    } catch (error) {
      toast.error("Some error occurred");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addAdditionalImageInput = () => {
    setFormData((prev) => ({
      ...prev,
      additionalImages: [...prev.additionalImages, ""],
    }));
  };

  const updateAdditionalImage = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalImages: prev.additionalImages.map((img, i) =>
        i === index ? value : img
      ),
    }));
  };

  const removeAdditionalImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      additionalImages: prev.additionalImages.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold">Add New Item</h1>
            <p className="text-gray-400 mt-2">
              Fill in the details below to add a new item to your collection.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg shadow-md p-6 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Item Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter item name"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-2">
                Item Type *
              </label>
              <Select
                value={formData.type}
                onValueChange={(value: ItemType) =>
                  setFormData((prev) => ({ ...prev, type: value }))
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select item type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Shirt">Shirt</SelectItem>
                  <SelectItem value="Pant">Pant</SelectItem>
                  <SelectItem value="Shoes">Shoes</SelectItem>
                  <SelectItem value="Sports Gear">Sports Gear</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Item Description *
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Describe the item..."
                rows={4}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Cover Image *
              </label>
              <div className="space-y-2">
                <Input
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      coverImage: e.target.value,
                    }))
                  }
                  placeholder="Enter cover image URL"
                  required
                />
                {formData.coverImage && (
                  <div className="mt-2">
                    <img
                      src={formData.coverImage}
                      alt="Cover preview"
                      className="w-32 h-32 object-cover rounded border"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Images (Optional) - for carousel
              </label>
              <div className="space-y-3">
                {formData.additionalImages.map((url, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      type="url"
                      value={url}
                      onChange={(e) =>
                        updateAdditionalImage(index, e.target.value)
                      }
                      placeholder={`Additional image ${index + 1} URL`}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeAdditionalImage(index)}
                      className="shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={addAdditionalImageInput}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Image
                </Button>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.type ||
                  !formData.description ||
                  !formData.coverImage
                }
                className="flex-1"
              >
                {isSubmitting ? "Adding Item..." : "Add Item"}
              </Button>
              <Link href="/view-items">
                <Button variant="outline" className="flex-1">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
