export const formatPrice = jest.fn((price: number) => `$${price.toFixed(2)}`);

export const getStarRating = jest.fn((rating: number) => {
  const result: ('full' | 'half' | 'empty')[] = [];
  const wholeStars = Math.floor(rating);
  const decimalPart = rating - wholeStars;

  // Add full stars
  for (let i = 0; i < wholeStars; i++) {
    result.push('full');
  }

  // Add half star if decimal part is significant
  if (decimalPart >= 0.25 && decimalPart < 0.75 && result.length < 5) {
    result.push('half');
  } else if (decimalPart >= 0.75 && result.length < 5) {
    result.push('full');
  }

  // Fill remaining with empty stars
  while (result.length < 5) {
    result.push('empty');
  }

  return result;
});

export const calculateDiscount = jest.fn((originalPrice: number, salePrice: number) => {
  if (originalPrice <= 0 || salePrice <= 0 || salePrice >= originalPrice) {
    return 0;
  }
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
});
