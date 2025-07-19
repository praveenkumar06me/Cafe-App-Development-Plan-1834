import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCoffee, FiStar, FiClock, FiMapPin, FiArrowRight } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiCoffee,
      title: 'Premium Coffee',
      description: 'Sourced from the finest coffee farms around the world'
    },
    {
      icon: FiStar,
      title: 'Expert Baristas',
      description: 'Skilled artisans crafting the perfect cup every time'
    },
    {
      icon: FiClock,
      title: 'Quick Service',
      description: 'Fast and efficient service without compromising quality'
    },
    {
      icon: FiMapPin,
      title: 'Cozy Atmosphere',
      description: 'A warm and inviting space to relax and enjoy'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-pattern min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-coffee-800 mb-6">
              Welcome to
              <span className="block text-coffee-600">Brew & Beans</span>
            </h1>
            <p className="text-xl md:text-2xl text-coffee-600 mb-8 max-w-2xl mx-auto">
              Where every cup tells a story of passion, quality, and the perfect blend of tradition and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center px-8 py-3 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors duration-200 font-medium"
              >
                View Menu
                <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-coffee-600 text-coffee-600 rounded-lg hover:bg-coffee-600 hover:text-white transition-colors duration-200 font-medium"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-coffee-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              We're passionate about delivering exceptional coffee experiences that go beyond the ordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-coffee-50 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-coffee-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-coffee-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-coffee-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-coffee-600 to-coffee-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Ready to Experience the Best?
            </h2>
            <p className="text-xl text-coffee-100 mb-8">
              Start your coffee journey with us today. Browse our menu and discover your new favorite blend.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-3 bg-white text-coffee-600 rounded-lg hover:bg-coffee-50 transition-colors duration-200 font-medium"
            >
              Explore Menu
              <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;