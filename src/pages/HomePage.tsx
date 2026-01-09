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
            Our Research & Development Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ClinicallyVeti is an Animal Health Contract Research Organization (CRO) offering simplified 
            contracting and project management solutions. Our bespoke approach delivers research through an 
            extensive portfolio of services from our network of internal and external strategic partners.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Who We Are Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Who We Are</h2>
          <h3 className="text-xl font-semibold text-green-600 mb-6 text-center">
            A collaborative approach to accelerate innovation in animal health.
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
            ClinicallyVeti manages a research innovation platform through collaborations with its group companies, 
            external Subject Matter Experts, Sponsors, Research Institutions, and Funders or Investors, bridging 
            the gap between knowledge, compliant research facilities, and client needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Streamlined Access</h4>
              <p className="text-sm text-gray-600">Single contract with multiple world-class CROs and centralized support ensuring quality across all sites.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Expert Teams</h4>
              <p className="text-sm text-gray-600">Specialized teams in Project Management, Scientific Writing, Quality Assurance, and renowned Subject Matter Experts.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Flexible Solutions</h4>
              <p className="text-sm text-gray-600">From Functional Services to dedicated facilities and complete Product Program Development Management.</p>
            </div>
          </div>
        </div>
        <ProductGrid products={featuredProducts} />

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Showcasing our comprehensive research capabilities and specialized services
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            <span>View All Research Solutions</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default HomePage;