import React from 'react';
import Link from 'next/link';
import { fetchCategories } from '@/lib/data'; // Assuming a data fetching function

// Example: Define a type for your category if not already defined elsewhere
interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string; // Optional icon path
}

const Sidebar = async () => {
  // Fetch categories - In a real app, this might be passed as a prop or fetched client-side
  // For RSC, we can fetch it directly if it's static or fetched on server
  let categories: Category[] = [];
  try {
    categories = await fetchCategories(); // You'll need to implement this function
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    // Optionally, render a fallback or error message
  }

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-4 hidden md:block text-gray-900">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <nav>
        <ul className="space-y-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/category/${category.slug}`}
                  className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 hover:text-primary text-base transition-colors duration-150"
                >
                  {/* Example: Icon placeholder - replace with actual icons if available */}
                  {category.icon && (
                    <img src={category.icon} alt="" className="w-5 h-5 opacity-70" />
                  )}
                  <span>{category.name}</span>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-400">No categories found.</p>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

// Helper function to fetch categories (example implementation)
// You should place this in a more appropriate location, e.g., src/lib/data.ts
// and ensure it correctly fetches from your categories.json
async function fetchCategories(): Promise<Category[]> {
  // In a real Next.js app, you might fetch from an API route or directly import the JSON
  // For simplicity, let's assume direct import for this example if it's small and static.
  // If categories.json is large or dynamic, use an API route.
  const res = await import('@/data/categories.json');
  return res.default as Category[];
}
