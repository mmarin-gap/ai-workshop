/**
 * Site configuration values
 * Central place for site constants, metadata and theme configuration
 */

export const siteConfig = {
  name: 'ElectroStore',
  description: 'Your premier electronics store with the latest tech products',
  url: 'https://electrostore.example.com',
  ogImage: 'https://electrostore.example.com/og-image.jpg',
  author: 'ElectroStore Team',

  // Main metadata
  keywords: [
    'electronics',
    'tech store',
    'computers',
    'tablets',
    'smartphones',
    'headphones',
    'accessories',
    'gadgets',
    'wearables',
    'smart home',
    'gaming'
  ],

  // Main navigation items
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Categories', href: '/categories' },
    { title: 'Deals', href: '/deals' },
    { title: 'About', href: '/about' }
  ],

  // Footer content sections
  footerLinks: {
    support: [
      { title: 'Contact Us', href: '/contact' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Shipping', href: '/shipping' },
      { title: 'Returns', href: '/returns' }
    ],
    account: [
      { title: 'My Account', href: '/account' },
      { title: 'Order History', href: '/orders' },
      { title: 'Wishlist', href: '/wishlist' },
      { title: 'Settings', href: '/settings' }
    ],
    company: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Blog', href: '/blog' },
      { title: 'Press', href: '/press' }
    ],
    legal: [
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'Accessibility', href: '/accessibility' }
    ]
  },

  // Social media links
  socialLinks: {
    twitter: 'https://twitter.com/electrostore',
    facebook: 'https://facebook.com/electrostore',
    instagram: 'https://instagram.com/electrostore',
    github: 'https://github.com/electrostore',
    youtube: 'https://youtube.com/electrostore',
  }
};

/**
 * Product display configuration
 */
export const productConfig = {
  // Grid layout settings
  grid: {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    largeDesktop: 5
  },

  // Pagination settings
  pagination: {
    defaultPageSize: 12,
    pageSizeOptions: [12, 24, 36, 48]
  },

  // Sort options
  sortOptions: [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Name: A to Z', value: 'name-asc' },
    { label: 'Name: Z to A', value: 'name-desc' },
    { label: 'Newest First', value: 'newest' },
    { label: 'Most Popular', value: 'popularity' },
    { label: 'Best Rating', value: 'rating' }
  ],

  // Filter types
  filterTypes: {
    priceRange: {
      type: 'range',
      min: 0,
      max: 5000,
      step: 100
    },
    brands: {
      type: 'checkbox',
    },
    ratings: {
      type: 'radio',
      options: [5, 4, 3, 2, 1]
    }
  }
};
