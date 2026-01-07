import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingBag, Check, Heart, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link to="/products" className="text-green-600 hover:text-green-700">
          ← Back to Products
        </Link>
      </div>
    );
  }

  // Generate consistent rating
  const generateRating = (productId: string): number => {
    let hash = 0;
    for (let i = 0; i < productId.length; i++) {
      const char = productId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    const normalized = Math.abs(hash) / 2147483647;
    return Math.round((4.0 + normalized * 1.0) * 10) / 10;
  };

  const rating = generateRating(product.id);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link 
        to="/products" 
        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            {product.inStock && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>In Stock</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-5 w-5 ${
                    star <= fullStars 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : star === fullStars + 1 && hasHalfStar
                      ? 'fill-yellow-200 text-yellow-400'
                      : 'fill-gray-200 text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-lg text-gray-600">({rating}) • 127 reviews</span>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-green-600">
            ${product.price}
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-3">
            <ShoppingBag className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Quality Guaranteed</div>
            </div>
            <div className="text-center">
              <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Fast Shipping</div>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900">Vet Approved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Category</h3>
            <p className="text-gray-600 capitalize">{product.category.replace('-', ' ')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Availability</h3>
            <p className="text-gray-600">
              {product.inStock ? 'In Stock - Ready to Ship' : 'Out of Stock'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;