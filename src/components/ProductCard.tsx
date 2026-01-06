import React from 'react';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2">(4.8)</span>
          </div>
          <div className="text-2xl font-bold text-green-600">${product.price}</div>
        </div>

        <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group">
          <ShoppingBag className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;