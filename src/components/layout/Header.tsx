import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Search as SearchIcon } from 'lucide-react'; // Added SearchIcon
import MobileMenu from './MobileMenu'; // Import MobileMenu

const Header = () => {
  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50 h-16 flex items-center text-gray-900"> {/* Updated background and text color */}
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo and MobileMenu toggle for small screens */}
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            <MobileMenu /> {/* Ensure MobileMenu icon is Gray-900 and meets tap target */}
          </div>
          <Link href="/" className="text-2xl font-bold text-primary">
            ElectronicsStore
          </Link>
        </div>

        {/* Search Bar - Centered and visible on medium and up */}
        <div className="hidden md:flex flex-grow max-w-xl mx-4">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 bg-gray-50 border-none focus:ring-primary" // Updated search bar style
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> {/* Adjusted icon color */}
          </div>
        </div>

        {/* Icons - Cart and User. */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/cart" passHref>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="text-gray-900 hover:bg-gray-100"> {/* Ensure icon color and tap target */}
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/account" passHref>
            <Button variant="ghost" size="icon" aria-label="User Account" className="text-gray-900 hover:bg-gray-100"> {/* Ensure icon color and tap target */}
              <User className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
