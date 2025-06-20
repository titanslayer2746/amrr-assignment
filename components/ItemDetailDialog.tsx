"use client";

import { useItems } from "@/contexts/ItemContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ItemDetailDialogProps {
  itemId: string | null;
  onClose: () => void;
}

export default function ItemDetailDialog({
  itemId,
  onClose,
}: ItemDetailDialogProps) {
  const { getItemById } = useItems();
  const item = itemId ? getItemById(itemId) : null;
  const [carouselIndex, setCarouselIndex] = useState(0);

  if (!item) return null;

  const images = [item.coverImage, ...item.additionalImages];

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleEnquire = () => {
    toast.success("Enquiry Sent");
  };

  return (
    <Dialog open={!!itemId} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.type}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-video rounded overflow-hidden flex items-center justify-center">
            {images.length > 0 && (
              <img
                src={images[carouselIndex]}
                alt={`Item image ${carouselIndex + 1}`}
                className="object-contain w-full h-full"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x300?text=No+Image";
                }}
              />
            )}
            {images.length > 1 && (
              <>
                <Button
                  type="button"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-lg font-bold shadow cursor-pointer"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  &#8592;
                </Button>
                <Button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-lg font-bold shadow cursor-pointer"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  &#8594;
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`inline-block w-2 h-2 rounded-full ${
                        idx === carouselIndex ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-700 text-sm whitespace-pre-line">
              {item.description}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button className="cursor-pointer" onClick={handleEnquire}>
            Enquire
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
