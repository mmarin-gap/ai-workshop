import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single className string using clsx and tailwind-merge
 * This helps prevent className conflicts when using dynamic classes with Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Theme constants for consistent usage across the application
 */
export const themeConfig = {
  // Main navigation items
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Categories', href: '/categories' },
  ],
  // Footer links organized by section
  footerLinks: {
    support: [
      { title: 'Contact Us', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Shipping', href: '/shipping' },
    ],
    account: [
      { title: 'My Account', href: '/account' },
      { title: 'Orders', href: '/orders' },
      { title: 'Wishlist', href: '/wishlist' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookies', href: '/cookies' },
    ],
  },
  // Application-wide constants
  siteConfig: {
    name: 'ElectroStore',
    description: 'Your one-stop shop for electronics',
    url: 'https://electrostore.com',
    // Social links
    socialLinks: {
      twitter: 'https://twitter.com/electrostore',
      github: 'https://github.com/electrostore',
      linkedin: 'https://linkedin.com/company/electrostore',
    },
  },
};
