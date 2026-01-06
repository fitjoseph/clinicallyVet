import React, { useState, useMemo } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          All Products
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our complete selection of veterinary-approved products for all your pet care needs. 
          Filter by category to find exactly what you're looking for.
        </p>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} products
          {selectedCategory !== 'all' && (
            <span className="ml-2 text-green-600 font-medium">
              in {selectedCategory.replace('-', ' ')} category
            </span>
          )}
        </p>
      </div>

      <ProductGrid products={filteredProducts} />
    </main>
  );
};

export default ProductsPage;