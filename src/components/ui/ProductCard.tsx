import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, getStarRating } from '@/lib/utils/helpers';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  stock: number;
  thumbnail: string;
  description: string;
  category?: string;
  rating?: {
    average: number;
    count: number;
  };
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
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleToggleWishlist = () => {
    setIsInWishlist((prev) => !prev);
    console.log(`${isInWishlist ? 'Removed from' : 'Added to'} wishlist: ${id}`);
  };

  const stars = rating?.average
    ? getStarRating(rating.average).map((type, index) => (
        <span
          key={`star-${index}`}
          className={`text-lg ${
            type === 'full'
              ? 'text-yellow-400'
              : type === 'half'
              ? 'text-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
          aria-hidden="true"
        >
          {type === 'full' ? '★' : type === 'half' ? '⯨' : '☆'}
        </span>
      ))
    : null;

  const canAddToCart = stock > 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-primary/20">
      <Link href={`/product/${id}`} className="block aspect-square overflow-hidden bg-muted">
        <Image
          src={thumbnail || '/images/placeholder-product.jpg'}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {salePrice && salePrice < price && (
        <div className="absolute top-2 right-2 rounded-full bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
          SALE
        </div>
      )}

      <button
        onClick={handleToggleWishlist}
        className="absolute top-2 left-2 z-10 rounded-full bg-background/70 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
      </button>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 truncate text-base font-semibold text-foreground group-hover:text-primary">
          <Link href={`/product/${id}`}>{name}</Link>
        </h3>

        {rating && (
          <div className="mb-2 flex items-center" aria-label={`Rated ${rating.average} out of 5 stars`}>
            {stars}
            <span className="ml-1.5 text-xs text-muted-foreground">({rating.count})</span>
          </div>
        )}

        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="mt-auto">
          <div className="mb-3 flex items-baseline justify-between">
            <div>
              {salePrice && salePrice < price ? (
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-destructive">
                    {formatPrice(salePrice)}
                  </span>
                  <span className="text-sm line-through text-muted-foreground">
                    {formatPrice(price)}
                  </span>
                </div>
              ) : (
                <span className="text-xl font-bold text-foreground">
                  {formatPrice(price)}
                </span>
              )}
            </div>
            {stock > 0 && stock < 10 && (
              <span className="text-xs font-medium text-yellow-600 dark:text-yellow-500">
                Only {stock} left!
              </span>
            )}
            {stock === 0 && (
                <span className="text-xs font-medium text-destructive">Out of stock</span>
            )}
          </div>
          
          <Button
            variant="default"
            size="sm"
            className="w-full"
            disabled={!canAddToCart}
            onClick={() => console.log(`Add to cart: ${id}, quantity: ${quantity}`)}
          >
            {canAddToCart ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
