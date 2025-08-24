import { ShoppingCart } from "lucide-react";

export default function NoItemsMessage() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500 p-5">
      <ShoppingCart className="w-8 h-8 mb-2" />
      <p>No items found in this type.</p>
    </div>
  );
}