"use client";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          salePrice={product.sale_price === null ? undefined : product.sale_price}
          stock={product.stock}
          thumbnail={product.thumbnail}
          description={product.description}
          rating={product.rating !== undefined ? { average: product.rating, count: 0 } : undefined}
        />
      ))}
    </div>
  );
}
