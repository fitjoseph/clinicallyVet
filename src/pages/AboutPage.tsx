import React from 'react';
import { Heart, Award, Users, Shield, Truck, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Heart className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About ClinicallyVet Group
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          For over two decades, ClinicallyVet Group has been dedicated to providing the highest quality 
          veterinary products and pet care supplies. We believe every pet deserves the best care possible.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To enhance the health and well-being of pets worldwide by providing veterinarians, 
            pet professionals, and pet owners with access to premium-quality products, innovative 
            solutions, and exceptional service that promotes the human-animal bond.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the leading global provider of veterinary and pet care products, recognized for 
            our commitment to quality, innovation, and the advancement of animal health and welfare 
            in communities around the world.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose EgarPharm Group?</h2>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose ClinicallyVet Group?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Veterinary Approved</h3>
            <p className="text-gray-600">All our products are carefully selected and approved by licensed veterinarians.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">We stand behind every product with our comprehensive quality guarantee.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Our team of pet care experts is always ready to help you make the right choice.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to get your pet supplies when you need them.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
            <p className="text-gray-600">Two decades of experience in veterinary and pet care industry.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet Lovers</h3>
            <p className="text-gray-600">Founded and operated by passionate pet lovers who understand your needs.</p>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white p-12 mb-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">300+</div>
            <div className="text-green-100">Products Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50,000+</div>
            <div className="text-green-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1,000+</div>
            <div className="text-green-100">Veterinary Partners</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-green-100">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-4">
            ClinicallyVet Group was founded in 2004 by a team of veterinarians and pet enthusiasts who 
            recognized the need for a reliable source of high-quality pet care products. What started 
            as a small veterinary supply company has grown into a trusted name in the pet care industry.
          </p>
          <p className="mb-4">
            Our journey began with a simple mission: to bridge the gap between veterinary professionals 
            and pet owners by providing access to the same quality products used in veterinary clinics. 
            Over the years, we've expanded our product range to include everything from premium pet food 
            and supplements to specialized medical equipment and everyday care items.
          </p>
          <p>
            Today, ClinicallyVet Group serves thousands of customers worldwide, including veterinary clinics, 
            pet stores, and individual pet owners. We continue to uphold our founding principles of quality, 
            integrity, and exceptional service, ensuring that every pet receives the care they deserve.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;