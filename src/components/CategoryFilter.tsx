import React from 'react';
import { Dog, Cat, Bird, Fish, Rabbit, Turtle, Zap, Microscope, Cog as Cow, Globe } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Products', icon: null, count: 160 },
  { id: 'dogs', name: 'Dogs', icon: Dog, count: 30 },
  { id: 'cats', name: 'Cats', icon: Cat, count: 30 },
  { id: 'birds', name: 'Birds', icon: Bird, count: 20 },
  { id: 'fish', name: 'Fish', icon: Fish, count: 15 },
  { id: 'small-animals', name: 'Small Animals', icon: Rabbit, count: 15 },
  { id: 'reptiles', name: 'Reptiles', icon: Turtle, count: 5 },
  { id: 'livestock', name: 'Livestock', icon: Cow, count: 5 },
  { id: 'exotic-animals', name: 'Exotic Animals', icon: Globe, count: 5 },
  { id: 'vaccines', name: 'Vaccines', icon: Zap, count: 5 },
  { id: 'lab-products', name: 'Lab Products', icon: Microscope, count: 30 },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                {IconComponent && (
                  <IconComponent className={`h-6 w-6 ${
                    selectedCategory === category.id ? 'text-green-600' : 'text-gray-600'
                  }`} />
                )}
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs text-gray-500">({category.count})</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;