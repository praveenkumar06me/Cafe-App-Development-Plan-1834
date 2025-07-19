import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiStar } = FiIcons;

const MenuCard = ({ item, index, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.popular && (
          <div className="absolute top-3 left-3 bg-cream-500 text-coffee-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <SafeIcon icon={FiStar} className="h-3 w-3 mr-1" />
            Popular
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-coffee-800 mb-2">
          {item.name}
        </h3>
        <p className="text-coffee-600 mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-coffee-700">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={onAddToCart}
            className="bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition-colors duration-200 flex items-center space-x-1"
          >
            <SafeIcon icon={FiPlus} className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;