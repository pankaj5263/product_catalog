"use client";

import ProductCard from "./ProductCard";
import { useGet } from "@/hooks/useGet";
import { apiDic } from "@/lib/apiDic";
import { FullPageLoader } from "./FullPageLoader";

export default function ProductsPage() {
  const { data: products, loading } = useGet(apiDic.products);
  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
