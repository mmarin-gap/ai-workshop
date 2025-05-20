import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

// Sample product data for testing
const mockProduct = {
  id: 'product-123',
  name: 'Test Product',
  price: 99.99,
  stock: 10,
  thumbnail: '/test-product.jpg',
  description: 'This is a test product description',
  rating: {
    average: 4.5,
    count: 123,
  },
};

describe('ProductCard Component', () => {
  // Reset all mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering Tests', () => {
    test('renders with all required props', () => {
      render(<ProductCard {...mockProduct} />);
      
      // Verify product information is displayed correctly
      expect(screen.getByTestId('product-name')).toHaveTextContent('Test Product');
      expect(screen.getByTestId('product-price')).toHaveTextContent('$99.99');
      expect(screen.getByTestId('product-description')).toHaveTextContent('This is a test product description');
      expect(screen.getByTestId('stock-status')).toHaveTextContent('In Stock');
      
      // Verify image
      const image = screen.getByTestId('product-image');
      expect(image).toHaveAttribute('src', '/test-product.jpg');
      expect(image).toHaveAttribute('alt', 'Test Product');
      
      // Verify star rating
      expect(screen.getByTestId('rating-count')).toHaveTextContent('(123)');
    });

    test('renders with sale price when provided', () => {
      const productWithSale = {
        ...mockProduct,
        salePrice: 79.99,
      };
      
      render(<ProductCard {...productWithSale} />);
      
      // Check if sale badge is displayed
      expect(screen.getByTestId('sale-badge')).toBeInTheDocument();
      
      // Check if price display shows both prices
      expect(screen.getByTestId('sale-price')).toHaveTextContent('$79.99');
      expect(screen.getByTestId('original-price')).toHaveTextContent('$99.99');
      
      // Original price should be absent
      expect(screen.queryByTestId('product-price')).not.toBeInTheDocument();
    });

    test('renders with low stock warning when stock is below 5', () => {
      const productWithLowStock = {
        ...mockProduct,
        stock: 3,
      };
      
      render(<ProductCard {...productWithLowStock} />);
      
      // Check for low stock warning
      expect(screen.getByTestId('stock-status')).toHaveTextContent('Only 3 left');
    });

    test('renders with out of stock message when stock is 0', () => {
      const productOutOfStock = {
        ...mockProduct,
        stock: 0,
      };
      
      render(<ProductCard {...productOutOfStock} />);
      
      // Check for out of stock message
      expect(screen.getByTestId('stock-status')).toHaveTextContent('Out of Stock');
      
      // Check if add to cart button is disabled
      expect(screen.getByTestId('add-to-cart-button')).toBeDisabled();
      expect(screen.getByTestId('increase-button')).toBeDisabled();
      expect(screen.getByTestId('decrease-button')).toBeDisabled();
    });

    test('renders without rating when not provided', () => {
      const productWithoutRating = {
        ...mockProduct,
        rating: undefined,
      };
      
      render(<ProductCard {...productWithoutRating} />);
      
      // Rating count should not be present
      expect(screen.queryByTestId('rating-count')).not.toBeInTheDocument();
    });

    test('renders with placeholder image when thumbnail is not provided', () => {
      const productWithoutThumbnail = {
        ...mockProduct,
        thumbnail: '',
      };
      
      render(<ProductCard {...productWithoutThumbnail} />);
      
      // Should use the placeholder image
      const image = screen.getByTestId('product-image');
      expect(image).toHaveAttribute('src', '/placeholder-product.jpg');
    });
  });

  describe('Interaction Tests', () => {
    test('increases quantity when + button is clicked', async () => {
      const user = userEvent.setup();
      
      render(<ProductCard {...mockProduct} />);
      
      // Initial quantity should be 1
      expect(screen.getByTestId('quantity')).toHaveTextContent('1');
      
      // Click increase button
      await user.click(screen.getByTestId('increase-button'));
      
      // Quantity should increase to 2
      expect(screen.getByTestId('quantity')).toHaveTextContent('2');
    });

    test('decreases quantity when - button is clicked', async () => {
      const user = userEvent.setup();
      
      render(<ProductCard {...mockProduct} />);
      
      // First increase to 2
      await user.click(screen.getByTestId('increase-button'));
      expect(screen.getByTestId('quantity')).toHaveTextContent('2');
      
      // Then decrease to 1
      await user.click(screen.getByTestId('decrease-button'));
      expect(screen.getByTestId('quantity')).toHaveTextContent('1');
    });

    test('does not decrease quantity below 1', async () => {
      const user = userEvent.setup();
      
      render(<ProductCard {...mockProduct} />);
      
      // Initial quantity should be 1
      expect(screen.getByTestId('quantity')).toHaveTextContent('1');
      
      // Try to decrease
      await user.click(screen.getByTestId('decrease-button'));
      
      // Quantity should remain 1
      expect(screen.getByTestId('quantity')).toHaveTextContent('1');
    });

    test('does not increase quantity above stock limit', async () => {
      const user = userEvent.setup();
      const productWithLimitedStock = {
        ...mockProduct,
        stock: 2,
      };
      
      render(<ProductCard {...productWithLimitedStock} />);
      
      // Increase to stock limit
      await user.click(screen.getByTestId('increase-button'));
      expect(screen.getByTestId('quantity')).toHaveTextContent('2');
      
      // Try to increase beyond stock limit
      await user.click(screen.getByTestId('increase-button'));
      
      // Quantity should remain at stock limit
      expect(screen.getByTestId('quantity')).toHaveTextContent('2');
      
      // Increase button should be disabled
      expect(screen.getByTestId('increase-button')).toBeDisabled();
    });

    test('toggles wishlist status when wishlist button is clicked', async () => {
      const user = userEvent.setup();
      
      render(<ProductCard {...mockProduct} />);
      
      // Initial wishlist status (not in wishlist)
      const wishlistButton = screen.getByTestId('wishlist-button');
      expect(wishlistButton).toHaveTextContent('🤍');
      
      // Click wishlist button
      await user.click(wishlistButton);
      
      // Wishlist status should change
      expect(wishlistButton).toHaveTextContent('❤️');
      
      // Click again to toggle back
      await user.click(wishlistButton);
      expect(wishlistButton).toHaveTextContent('🤍');
    });

    test('calls onAddToCart with correct parameters when add to cart button is clicked', async () => {
      const user = userEvent.setup();
      const onAddToCartMock = jest.fn();
      
      render(
        <ProductCard 
          {...mockProduct} 
          onAddToCart={onAddToCartMock} 
        />
      );
      
      // Click add to cart button
      await user.click(screen.getByTestId('add-to-cart-button'));
      
      // Check if onAddToCart was called with correct parameters
      expect(onAddToCartMock).toHaveBeenCalledTimes(1);
      expect(onAddToCartMock).toHaveBeenCalledWith('product-123', 1);
      
      // Increase quantity and try again
      await user.click(screen.getByTestId('increase-button'));
      await user.click(screen.getByTestId('add-to-cart-button'));
      
      // Should be called with updated quantity
      expect(onAddToCartMock).toHaveBeenCalledTimes(2);
      expect(onAddToCartMock).toHaveBeenCalledWith('product-123', 2);
    });

    test('calls onAddToWishlist when wishlist button is clicked', async () => {
      const user = userEvent.setup();
      const onAddToWishlistMock = jest.fn();
      
      render(
        <ProductCard 
          {...mockProduct} 
          onAddToWishlist={onAddToWishlistMock} 
        />
      );
      
      // Click wishlist button
      await user.click(screen.getByTestId('wishlist-button'));
      
      // Check if onAddToWishlist was called correctly
      expect(onAddToWishlistMock).toHaveBeenCalledTimes(1);
      expect(onAddToWishlistMock).toHaveBeenCalledWith('product-123');
    });
  });
});
