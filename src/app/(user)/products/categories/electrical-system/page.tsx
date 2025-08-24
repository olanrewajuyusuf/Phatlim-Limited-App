import { Suspense } from "react";
import CategoriesCard from "../../_components/CategoriesCard";
import { getCategoriesProducts } from "@/app/_lib/data";
import NoItemsMessage from "../../_components/NoItemMessage";
import CardSkeleton from "../../_components/CardSkeleton";

export default async function ElectricalSystemPage() {
  const products = await getCategoriesProducts("Electrical System");

  // group by type
  const groupedByType = products.reduce((acc: Record<string, typeof products>, product) => {
    if (!acc[product.type]) acc[product.type] = [];
    acc[product.type].push(product);
    return acc;
  }, {});

  const types = Object.keys(groupedByType);

  return (
    <div className="w-[80%] py-2 md:py-5 overflow-scroll hide-scrollbar">
      <div className="w-[100%] h-screen overflow-y-scroll hide-scrollbar">
        {types.length === 0 ? (
          <NoItemsMessage />
        ) : (
          types.map((type) => (
            <div key={type} className="border-t border-grey pb-2">
              <h2 className="font-semibold border-b border-grey py-1 px-2 md:px-5 mb-2">
                {type}
              </h2>

              <div className="flex gap-2 md:gap-5 px-2 md:px-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
                <Suspense
                  fallback={Array.from({ length: 4 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                >
                  {groupedByType[type].length === 0 ? (
                    <NoItemsMessage />
                  ) : (
                    groupedByType[type].map((product) => (
                      <CategoriesCard
                        key={product.id}
                        name={product.name}
                        image={product.imagePath}
                        type={product.type}
                      />
                    ))
                  )}
                </Suspense>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
