import React from 'react';
import { Stethoscope } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Stethoscope className="h-6 w-6 text-green-600" />
              <span className="text-green-600 font-semibold">Professional Pet Care</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything Your Pet Needs for a
              <span className="text-green-600"> Healthy Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our premium selection of veterinary-approved products for dogs, cats, birds, fish, and small animals. Quality nutrition and care supplies trusted by pet professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                View Catalog
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Veterinary professionals working in laboratory with pet"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-green-600 font-bold text-2xl">500+</div>
              <div className="text-gray-600 font-medium">Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;