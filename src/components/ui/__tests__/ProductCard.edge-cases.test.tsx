import React from 'react';
import { render, screen } from '@testing-library/react';
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

// Minimal product data for edge case testing
const minimalProduct = {
  id: 'product-min',
  name: 'Minimal Product',
  price: 10.00,
  stock: 1,
  thumbnail: '',
  description: '',
};

describe('ProductCard Edge Cases', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('handles products with minimal data', () => {
    render(<ProductCard {...minimalProduct} />);

    expect(screen.getByTestId('product-name')).toHaveTextContent('Minimal Product');
    expect(screen.getByTestId('product-price')).toHaveTextContent('$10.00');
    expect(screen.getByTestId('product-description')).toHaveTextContent('');

    // Should use placeholder image
    const image = screen.getByTestId('product-image');
    expect(image).toHaveAttribute('src', '/placeholder-product.jpg');
  });

  test('handles zero price correctly', () => {
    const freeProduct = {
      ...minimalProduct,
      price: 0,
    };

    render(<ProductCard {...freeProduct} />);

    expect(screen.getByTestId('product-price')).toHaveTextContent('$0.00');
  });

  test('handles very high prices correctly', () => {
    const expensiveProduct = {
      ...minimalProduct,
      price: 9999999.99,
    };

    render(<ProductCard {...expensiveProduct} />);

    // Should format the price correctly
    expect(screen.getByTestId('product-price')).toHaveTextContent('$9999999.99');
  });

  test('handles very long product names', () => {
    const longNameProduct = {
      ...minimalProduct,
      name: 'This is an extremely long product name that should test how the component handles overflow of text in the UI which might cause layout issues if not properly handled with truncation or wrapping',
    };

    render(<ProductCard {...longNameProduct} />);

    const nameElement = screen.getByTestId('product-name');
    expect(nameElement).toBeInTheDocument();
    // Name should be contained within the element
    expect(nameElement.textContent).toContain('This is an extremely long product');
  });

  test('handles very long descriptions', () => {
    const longDescriptionProduct = {
      ...minimalProduct,
      description: 'This is an extremely detailed product description that contains multiple sentences to test how the component handles long text. It should properly truncate or otherwise handle this text to prevent layout issues while still giving the user enough information about the product. The description might contain technical details, features, benefits, and other important information that helps the user make an informed purchase decision.',
    };

    render(<ProductCard {...longDescriptionProduct} />);

    const descriptionElement = screen.getByTestId('product-description');
    expect(descriptionElement).toBeInTheDocument();
    // Description should be contained within the element
    expect(descriptionElement.textContent).toContain('This is an extremely detailed');
  });

  test('handles extremely high stock values', () => {
    const highStockProduct = {
      ...minimalProduct,
      stock: 99999,
    };

    render(<ProductCard {...highStockProduct} />);

    expect(screen.getByTestId('stock-status')).toHaveTextContent('In Stock');
  });

  test('handles integer rating values', () => {
    const integerRatingProduct = {
      ...minimalProduct,
      rating: {
        average: 3,
        count: 10,
      },
    };

    render(<ProductCard {...integerRatingProduct} />);

    expect(screen.getByTestId('rating-count')).toHaveTextContent('(10)');
  });

  test('handles zero rating correctly', () => {
    const zeroRatingProduct = {
      ...minimalProduct,
      rating: {
        average: 0,
        count: 5,
      },
    };

    render(<ProductCard {...zeroRatingProduct} />);

    expect(screen.getByTestId('rating-count')).toHaveTextContent('(5)');
  });

  test('handles missing callback props gracefully', async () => {
    const user = userEvent.setup();

    // Render without callback props
    render(<ProductCard {...minimalProduct} />);

    // Click add to cart button
    await user.click(screen.getByTestId('add-to-cart-button'));

    // Should not throw errors

    // Click wishlist button
    await user.click(screen.getByTestId('wishlist-button'));

    // Wishlist status should still toggle internally
    expect(screen.getByTestId('wishlist-button')).toHaveTextContent('❤️');
  });

  test('handles negative price gracefully', () => {
    const negativePriceProduct = {
      ...minimalProduct,
      price: -10.00,
    };

    render(<ProductCard {...negativePriceProduct} />);

    // Should display the negative price
    expect(screen.getByTestId('product-price')).toHaveTextContent('$-10.00');
  });

  test('handles negative stock gracefully', () => {
    const negativeStockProduct = {
      ...minimalProduct,
      stock: -5,
    };

    render(<ProductCard {...negativeStockProduct} />);

    // Should treat negative stock as out of stock
    expect(screen.getByTestId('stock-status')).toHaveTextContent('Out of Stock');
    expect(screen.getByTestId('add-to-cart-button')).toBeDisabled();
  });

  test('handles sale price equal to regular price', () => {
    const samePrice = {
      ...minimalProduct,
      price: 20.00,
      salePrice: 20.00,
    };

    render(<ProductCard {...samePrice} />);

    // Should not show sale badge and just display regular price
    expect(screen.queryByTestId('sale-badge')).not.toBeInTheDocument();
    expect(screen.getByTestId('product-price')).toHaveTextContent('$20.00');
  });

  test('handles sale price higher than regular price', () => {
    const higherSalePrice = {
      ...minimalProduct,
      price: 20.00,
      salePrice: 25.00,
    };

    render(<ProductCard {...higherSalePrice} />);

    // Should not show sale badge and just display regular price
    expect(screen.queryByTestId('sale-badge')).not.toBeInTheDocument();
    expect(screen.getByTestId('product-price')).toHaveTextContent('$20.00');
  });
});
