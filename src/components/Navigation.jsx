import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCart } from '../context/CartContext';

const { FiCoffee, FiShoppingCart, FiMenu, FiX, FiHome, FiBook, FiInfo } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/menu', label: 'Menu', icon: FiBook },
    { path: '/about', label: 'About', icon: FiInfo },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-coffee-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiCoffee} className="h-8 w-8 text-coffee-600" />
            <span className="font-display text-xl font-bold text-coffee-800">
              Brew & Beans
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-coffee-100 text-coffee-700'
                    : 'text-coffee-600 hover:bg-coffee-50 hover:text-coffee-700'
                }`}
              >
                <SafeIcon icon={item.icon} className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative flex items-center space-x-1 px-3 py-2 rounded-lg bg-coffee-600 text-white hover:bg-coffee-700 transition-colors duration-200"
            >
              <SafeIcon icon={FiShoppingCart} className="h-4 w-4" />
              <span className="font-medium">Cart</span>
              {getTotalItems() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-cream-500 text-coffee-800 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-coffee-600 hover:bg-coffee-50 transition-colors duration-200"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-coffee-200"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-coffee-100 text-coffee-700'
                      : 'text-coffee-600 hover:bg-coffee-50 hover:text-coffee-700'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-coffee-600 text-white hover:bg-coffee-700 transition-colors duration-200"
              >
                <SafeIcon icon={FiShoppingCart} className="h-4 w-4" />
                <span className="font-medium">Cart ({getTotalItems()})</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;