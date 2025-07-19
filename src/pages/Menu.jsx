import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCart } from '../context/CartContext';
import MenuCard from '../components/MenuCard';

const { FiFilter, FiSearch } = FiIcons;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'sandwiches', name: 'Sandwiches' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Espresso',
      category: 'coffee',
      price: 3.50,
      description: 'Rich, bold espresso shot with a perfect crema',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop',
      popular: true
    },
    {
      id: 2,
      name: 'Cappuccino',
      category: 'coffee',
      price: 4.25,
      description: 'Classic Italian coffee with steamed milk and foam',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
      popular: true
    },
    {
      id: 3,
      name: 'Latte',
      category: 'coffee',
      price: 4.75,
      description: 'Smooth espresso with steamed milk and light foam',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Americano',
      category: 'coffee',
      price: 3.75,
      description: 'Espresso diluted with hot water for a lighter taste',
      image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'Mocha',
      category: 'coffee',
      price: 5.25,
      description: 'Espresso with chocolate syrup and steamed milk',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'Earl Grey',
      category: 'tea',
      price: 3.25,
      description: 'Classic black tea with bergamot oil',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop'
    },
    {
      id: 7,
      name: 'Green Tea',
      category: 'tea',
      price: 3.00,
      description: 'Delicate green tea with antioxidants',
      image: 'https://images.unsplash.com/photo-1556881286-bcf2c8c6e29a?w=300&h=200&fit=crop'
    },
    {
      id: 8,
      name: 'Chamomile',
      category: 'tea',
      price: 3.50,
      description: 'Soothing herbal tea perfect for relaxation',
      image: 'https://images.unsplash.com/photo-1597318181409-cf85b0c3d69d?w=300&h=200&fit=crop'
    },
    {
      id: 9,
      name: 'Croissant',
      category: 'pastries',
      price: 3.75,
      description: 'Buttery, flaky French pastry',
      image: 'https://images.unsplash.com/photo-1555507036-ab794f1d8bf3?w=300&h=200&fit=crop',
      popular: true
    },
    {
      id: 10,
      name: 'Blueberry Muffin',
      category: 'pastries',
      price: 4.25,
      description: 'Fresh baked muffin with juicy blueberries',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop'
    },
    {
      id: 11,
      name: 'Chocolate Chip Cookie',
      category: 'pastries',
      price: 2.75,
      description: 'Warm, gooey cookie with chocolate chips',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop'
    },
    {
      id: 12,
      name: 'Turkey Club',
      category: 'sandwiches',
      price: 8.50,
      description: 'Turkey, bacon, lettuce, tomato on toasted bread',
      image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop'
    },
    {
      id: 13,
      name: 'Veggie Wrap',
      category: 'sandwiches',
      price: 7.25,
      description: 'Fresh vegetables and hummus in a tortilla wrap',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop'
    },
    {
      id: 14,
      name: 'Grilled Cheese',
      category: 'sandwiches',
      price: 6.75,
      description: 'Classic grilled cheese with tomato soup',
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop'
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee, tea, and delicious treats.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coffee-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiFilter} className="text-coffee-600 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="menu-grid"
        >
          {filteredItems.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-coffee-600 text-lg">
              No items found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;