import { ShoppingCart } from "lucide-react";

export default function CardSkeleton() {
  return (
    <div className="w-40 h-52 rounded-xl bg-gray-200 flex flex-col items-center justify-center animate-pulse shadow-sm">
      <ShoppingCart className="w-6 h-6 text-gray-500 mb-2" />
      <div className="w-16 h-3 bg-gray-300 rounded mb-1" />
      <div className="w-12 h-3 bg-gray-300 rounded" />
    </div>
  );
}