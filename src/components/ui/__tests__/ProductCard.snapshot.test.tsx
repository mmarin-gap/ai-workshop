import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../ProductCard';

// Mock the helper functions
jest.mock('@/lib/utils/helpers', () => ({
  formatPrice: jest.fn((price) => `$${price.toFixed(2)}`),
  getStarRating: jest.fn((rating) => {
    const stars = [];
    const wholeStars = Math.floor(rating);
    const decimalPart = rating - wholeStars;
    
    // Add full stars
    for (let i = 0; i < wholeStars; i++) {
      stars.push('full');
    }
    
    // Add half star if decimal part is significant
    if (decimalPart >= 0.25 && decimalPart < 0.75 && stars.length < 5) {
      stars.push('half');
    } else if (decimalPart >= 0.75 && stars.length < 5) {
      stars.push('full');
    }
    
    // Fill remaining with empty stars
    while (stars.length < 5) {
      stars.push('empty');
    }
    
    return stars;
  }),
}));

// Sample product data 
const standardProduct = {
  id: 'product-123',
  name: 'Standard Product',
  price: 49.99,
  stock: 10,
  thumbnail: '/test-product.jpg',
  description: 'This is a standard product description',
  rating: {
    average: 4.5,
    count: 123,
  },
};

const saleProduct = {
  ...standardProduct,
  id: 'product-456',
  name: 'Sale Product',
  salePrice: 39.99,
};

const outOfStockProduct = {
  ...standardProduct,
  id: 'product-789',
  name: 'Out of Stock Product',
  stock: 0,
};

describe('ProductCard Snapshots', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('matches snapshot for standard product', () => {
    const { asFragment } = render(<ProductCard {...standardProduct} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot for product with sale price', () => {
    const { asFragment } = render(<ProductCard {...saleProduct} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot for out of stock product', () => {
    const { asFragment } = render(<ProductCard {...outOfStockProduct} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with minimal props', () => {
    const minimalProduct = {
      id: 'product-min',
      name: 'Minimal Product',
      price: 10.00,
      stock: 1,
      thumbnail: '',
      description: '',
    };
    
    const { asFragment } = render(<ProductCard {...minimalProduct} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('matches snapshot with callback functions', () => {
    const onAddToCart = jest.fn();
    const onAddToWishlist = jest.fn();
    
    const { asFragment } = render(
      <ProductCard 
        {...standardProduct}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
    );
    
    expect(asFragment()).toMatchSnapshot();
  });
});
