import SearchProduct from "@/app/components/SearchProduct";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function SearchProductPage() {
  return (
    <Suspense fallback={<div><Loader2 /></div>}>
      <SearchProduct />
    </Suspense>
  );
}