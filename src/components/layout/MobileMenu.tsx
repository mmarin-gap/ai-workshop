'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, User } from 'lucide-react'; // Removed Search
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fetchCategories } from '@/lib/data'; // Assuming a data fetching function

interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories for mobile menu:", error);
      }
    };
    loadCategories();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden"> {/* Only show on mobile/tablet */}
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Open menu" className="text-gray-900 w-11 h-11"> {/* Ensure icon color and tap target */}
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)} // Close on overlay click
        ></div>
      )}

      <div
        ref={menuRef} // Assign ref to the menu panel itself
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs sm:max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsOpen(false)}>
              ElectronicsStore
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu" className="text-gray-900 w-11 h-11"> {/* Ensure icon color and tap target */}
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <Input 
              type="search" 
              placeholder="Search products..." 
              className="w-full h-12 bg-gray-50 border-none focus:ring-primary text-gray-900 placeholder-gray-400" // Updated search bar style
            />
          </div>

          {/* Navigation Links */}
          <nav className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-400 mb-2 px-2">Categories</h3> {/* Adjusted heading style */}
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="block p-2 rounded-md hover:bg-gray-100 hover:text-primary text-gray-900 text-base transition-colors duration-150" // Adjusted link style
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <hr className="my-4 border-gray-400"/> {/* Adjusted divider color */}

          {/* Account & Cart Links */}
          <div className="space-y-2">
             <Link href="/cart" passHref>
                <Button variant="ghost" className="w-full justify-start text-gray-900 hover:bg-gray-100 hover:text-primary h-12 text-base" onClick={() => setIsOpen(false)}>{/* Adjusted button style */}
                    <ShoppingCart className="h-5 w-5 mr-3" /> Cart
                </Button>
            </Link>
            <Link href="/account" passHref>
                <Button variant="ghost" className="w-full justify-start text-gray-900 hover:bg-gray-100 hover:text-primary h-12 text-base" onClick={() => setIsOpen(false)}>{/* Adjusted button style */}
                    <User className="h-5 w-5 mr-3" /> Account
                </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

// Ensure fetchCategories is correctly implemented in @/lib/data
// Example (should be in src/lib/data.ts):
// export async function fetchCategories() {
//   const res = await import('@/data/categories.json');
//   return res.default;
// }
