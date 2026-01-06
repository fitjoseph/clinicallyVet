import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  // Show only first 16 products on homepage
  const featuredProducts = products.slice(0, 16);

  return (
    <>
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular veterinary-approved products for your beloved pets. 
            Each item is carefully selected to promote health and happiness.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Showing 16 of {products.length} products
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            <span>Browse All Products</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default HomePage;