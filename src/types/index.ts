/**
 * Common types used throughout the application
 */

// Product related types
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category_id: string;
  price: number;
  sale_price?: number;
  stock: number;
  thumbnail: string;
  images: string[];
  description: string;
  full_description: string;
  specifications: Record<string, string>;
  rating: {
    average: number;
    count: number;
  };
  related_products: string[];
}

// Theme related types
export type Theme = 'light' | 'dark' | 'system';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
}

// Component props types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}
