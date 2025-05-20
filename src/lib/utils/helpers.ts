/**
 * Collection of commonly used utility functions for the application
 */

/**
 * Format a price value with currency symbol and decimal places
 *
 * @param {number} price - The price to format
 * @param {string} currency - Currency code (default: USD)
 * @param {string} locale - Locale for formatting (default: en-US)
 * @returns {string} - Formatted price string
 */
export const formatPrice = (
  price: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Calculate discount percentage between original and sale price
 *
 * @param {number} originalPrice - Original price
 * @param {number} salePrice - Sale price
 * @returns {number} - Discount percentage
 */
export const calculateDiscount = (
  originalPrice: number,
  salePrice: number
): number => {
  if (originalPrice <= 0 || salePrice <= 0 || salePrice >= originalPrice) {
    return 0;
  }

  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

/**
 * Generate star rating representation
 *
 * @param {number} rating - Rating value (0-5)
 * @param {number} maxStars - Maximum number of stars (default: 5)
 * @returns {string[]} - Array of star states ('full', 'half', 'empty')
 */
export const getStarRating = (
  rating: number,
  maxStars: number = 5
): ('full' | 'half' | 'empty')[] => {
  const stars: ('full' | 'half' | 'empty')[] = [];

  // Get the whole and decimal part of the rating
  const wholeStars = Math.floor(rating);
  const decimalPart = rating - wholeStars;

  // Add full stars
  for (let i = 0; i < wholeStars; i++) {
    stars.push('full');
  }

  // Add half star if decimal part is significant
  if (decimalPart >= 0.25 && decimalPart < 0.75 && stars.length < maxStars) {
    stars.push('half');
  } else if (decimalPart >= 0.75 && stars.length < maxStars) {
    // Add full star if decimal is large enough
    stars.push('full');
  }

  // Fill remaining with empty stars
  while (stars.length < maxStars) {
    stars.push('empty');
  }

  return stars;
};

/**
 * Truncate text to a specified length and add ellipsis
 *
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength).trim()}...`;
};

/**
 * Debounce a function call
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} - Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * Generate a unique ID
 *
 * @param {string} prefix - Optional prefix for the ID
 * @returns {string} - Unique ID
 */
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};
