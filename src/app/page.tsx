import Link from "next/link";
import { fetchProducts, fetchCategories } from "@/lib/data";
import ProductGrid from "@/components/ui/ProductGrid";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data"; // Import the Product type

export default async function HomePage() {
  const allProducts = await fetchProducts();
  const categories = await fetchCategories();

  // Helper to get a few products for a category to feature
  const getFeaturedProductsForCategory = (categoryId: string, count: number = 4) => {
    return allProducts.filter((p) => p.category_id === categoryId).slice(0, count);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section - Optional: Add a hero banner if designed */}
      {/* <section className="bg-neutral-100 dark:bg-neutral-800 py-12 md:py-20 rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ElectronicsStore</h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8">
            Your one-stop shop for the latest and greatest in tech.
          </p>
          <Link href="/products">
            <Button size="lg" variant="default">Shop All Products</Button>
          </Link>
        </div>
      </section> */}

      {categories.map((category) => {
        const featuredProducts = getFeaturedProductsForCategory(category.id, 4);
        if (featuredProducts.length === 0) return null; // Don't render section if no products

        return (
          <section key={category.id} aria-labelledby={`category-${category.slug}-heading`}>
            <div className="flex justify-between items-center mb-6">
              <h2 id={`category-${category.slug}-heading`} className="text-2xl font-bold text-foreground">
                {category.name}
              </h2>
              <Link href={`/category/${category.slug}`} passHref>
                <Button variant="outline" size="sm">
                  View more
                </Button>
              </Link>
            </div>
            <ProductGrid products={featuredProducts} />
          </section>
        );
      })}

      {/* Fallback if no categories or products */}
      {categories.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No products available yet.</h2>
          <p className="text-muted-foreground">Please check back later or contact support.</p>
        </div>
      )}
    </div>
  );
}
