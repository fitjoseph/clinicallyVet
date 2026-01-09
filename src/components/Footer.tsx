import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold">ClinicallyVet Group</h3>
                <p className="text-sm text-green-400">Quality Care for Every Pet</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for premium pet products and veterinary supplies. We're committed to keeping your pets healthy and happy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pet Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Dog Supplies</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Cat Supplies</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Bird Supplies</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Fish & Aquarium</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">Small Animals</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">8122 Beverly Blvd, Los Angeles, CA 90048, United States</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+1 (213) 733-9713</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">info@clinicallyveti.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ClinicallyVet Group. All rights reserved. Made with ❤️ for pet lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;