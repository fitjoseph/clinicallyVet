import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Generate a consistent random rating between 4.0 and 5.0 based on product ID
  const generateRating = (productId: string): number => {
    let hash = 0;
    for (let i = 0; i < productId.length; i++) {
      const char = productId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    // Use absolute value and modulo to get a number between 0 and 1
    const normalized = Math.abs(hash) / 2147483647;
    // Scale to range 4.0 to 5.0
    return Math.round((4.0 + normalized * 1.0) * 10) / 10;
  };

  const rating = generateRating(product.id);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.inStock && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Check className="h-3 w-3" />
            <span>In Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="text-xs font-mono text-gray-500 mb-2">Code: {product.id.toUpperCase()}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-center space-x-2">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`h-4 w-4 ${
                  star <= fullStars 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : star === fullStars + 1 && hasHalfStar
                    ? 'fill-yellow-200 text-yellow-400'
                    : 'fill-gray-200 text-gray-300'
                }`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">({rating})</span>
          </div>
          <div className="text-2xl font-bold text-green-600">${product.price}</div>
        </div>

        <Link 
          to={`/product/${product.id}`}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group"
        >
          <ShoppingBag className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;