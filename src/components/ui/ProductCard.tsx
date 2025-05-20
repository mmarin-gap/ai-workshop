import { useState } from 'react';
import Image from 'next/image';
import { formatPrice, getStarRating } from '@/lib/utils/helpers';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  stock: number;
  thumbnail: string;
  description: string;
  rating?: {
    average: number;
    count: number;
  };
  onAddToCart?: (id: string, quantity: number) => void;
  onAddToWishlist?: (id: string) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  salePrice,
  stock,
  thumbnail,
  description,
  rating,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (onAddToCart && stock > 0) {
      onAddToCart(id, quantity);
    }
  };
  
  const handleToggleWishlist = () => {
    setIsInWishlist((prev) => !prev);
    if (onAddToWishlist) {
      onAddToWishlist(id);
    }
  };
  
  // Generate star ratings display
  const stars = rating?.average 
    ? getStarRating(rating.average).map((type, index) => (
        <span 
          key={`star-${index}`} 
          className={`text-lg ${
            type === 'full' 
              ? 'text-warning' 
              : type === 'half' 
                ? 'text-warning' 
                : 'text-gray-300'
          }`}
          aria-hidden="true"
        >
          {type === 'full' ? '★' : type === 'half' ? '⯨' : '☆'}
        </span>
      ))
    : null;

  return (
    <div 
      className="card-hoverable w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all" 
      data-testid="product-card"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={thumbnail || '/placeholder-product.jpg'}
          alt={name}
          width={300}
          height={200}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          data-testid="product-image"
        />
        {salePrice && salePrice < price && (
          <div className="absolute top-2 right-2 bg-error text-white text-xs font-bold px-2 py-1 rounded-full" data-testid="sale-badge">
            Sale
          </div>
        )}
        <button
          className={`absolute top-2 left-2 text-xl ${
            isInWishlist ? 'text-error' : 'text-gray-400 hover:text-error'
          } transition-colors`}
          onClick={handleToggleWishlist}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          data-testid="wishlist-button"
        >
          {isInWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 truncate text-gray-800 dark:text-white" data-testid="product-name">
          {name}
        </h3>
        
        <div className="flex items-center mb-2" aria-label={`Rated ${rating?.average || 0} out of 5 stars`}>
          {stars}
          {rating && (
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400" data-testid="rating-count">
              ({rating.count})
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2" data-testid="product-description">
          {description}
        </p>
        
        <div className="flex justify-between items-center mb-3">
          <div>
            {salePrice && salePrice < price ? (
              <div className="flex flex-col">
                <span className="text-lg font-bold text-error dark:text-error" data-testid="sale-price">
                  {formatPrice(salePrice)}
                </span>
                <span className="text-sm line-through text-gray-500 dark:text-gray-400" data-testid="original-price">
                  {formatPrice(price)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white" data-testid="product-price">
                {formatPrice(price)}
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-300" data-testid="stock-status">
            {stock > 0 ? (
              stock < 5 ? (
                <span className="text-warning">Only {stock} left</span>
              ) : (
                <span className="text-success">In Stock</span>
              )
            ) : (
              <span className="text-error">Out of Stock</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              disabled={quantity <= 1 || stock <= 0}
              aria-label="Decrease quantity"
              data-testid="decrease-button"
            >
              -
            </button>
            <span className="px-2 py-1" data-testid="quantity">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              disabled={quantity >= stock || stock <= 0}
              aria-label="Increase quantity"
              data-testid="increase-button"
            >
              +
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="btn-primary px-4 py-2 ml-2 flex-grow disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={stock <= 0}
            data-testid="add-to-cart-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
