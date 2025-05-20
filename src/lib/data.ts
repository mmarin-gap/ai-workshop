import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';

// Define types based on your JSON structure
// These should ideally be in a central types file (e.g., src/types/index.ts)

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  category_id: string;
  price: number;
  sale_price?: number | null;
  stock: number;
  thumbnail: string;
  images: string[];
  description: string;
  full_description: string;
  specifications: Record<string, string>;
  rating: number;
  related_products?: string[];
}

/**
 * Fetches all categories.
 * In a real application, this might fetch from an API.
 * For this PoC, it imports directly from the JSON file.
 */
export async function fetchCategories(): Promise<Category[]> {
  // Simulate async operation if needed, e.g., for API calls
  // For local JSON, direct import is fine but wrapping in Promise to match async signature
  return Promise.resolve(categoriesData as Category[]);
}

/**
 * Fetches all products.
 */
export async function fetchProducts(): Promise<Product[]> {
  return Promise.resolve(productsData as Product[]);
}

/**
 * Fetches a single product by its ID.
 * @param id The ID of the product to fetch.
 */
export async function fetchProductById(id: string): Promise<Product | undefined> {
  const products = await fetchProducts();
  return Promise.resolve(products.find(product => product.id === id));
}

/**
 * Fetches products by category slug.
 * @param categorySlug The slug of the category.
 */
export async function fetchProductsByCategory(categorySlug: string): Promise<Product[]> {
  const categories = await fetchCategories();
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) {
    return Promise.resolve([]);
  }
  const products = await fetchProducts();
  return Promise.resolve(products.filter(product => product.category_id === category.id));
}
