import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCart } from '../context/CartContext';

const { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiCreditCard } = FiIcons;

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert('Thank you for your order! This is a demo checkout.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-coffee-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <SafeIcon icon={FiShoppingBag} className="h-24 w-24 text-coffee-300 mx-auto mb-6" />
            <h1 className="font-display text-3xl font-bold text-coffee-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-coffee-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => window.location.href = '#/menu'}
              className="bg-coffee-600 text-white px-8 py-3 rounded-lg hover:bg-coffee-700 transition-colors duration-200 font-medium"
            >
              Browse Menu
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-coffee-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl font-bold text-coffee-800 mb-4">
            Your Cart
          </h1>
          <p className="text-coffee-600">
            Review your order and proceed to checkout
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold text-coffee-800">
                  Order Items
                </h2>
                <button
                  onClick={clearCart}
                  className="text-coffee-600 hover:text-coffee-700 transition-colors duration-200"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 border border-coffee-100 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-coffee-800">{item.name}</h3>
                      <p className="text-coffee-600 text-sm">${item.price.toFixed(2)} each</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                        className="p-1 rounded-full bg-coffee-100 hover:bg-coffee-200 transition-colors duration-200"
                      >
                        <SafeIcon icon={FiMinus} className="h-4 w-4 text-coffee-600" />
                      </button>
                      <span className="w-8 text-center font-medium text-coffee-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                        className="p-1 rounded-full bg-coffee-100 hover:bg-coffee-200 transition-colors duration-200"
                      >
                        <SafeIcon icon={FiPlus} className="h-4 w-4 text-coffee-600" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-coffee-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <SafeIcon icon={FiTrash2} className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-24"
            >
              <h2 className="font-display text-xl font-semibold text-coffee-800 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-coffee-600">Subtotal</span>
                  <span className="text-coffee-800">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-coffee-600">Tax</span>
                  <span className="text-coffee-800">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-coffee-200 pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-coffee-800">Total</span>
                    <span className="font-bold text-coffee-800 text-lg">
                      ${(getTotalPrice() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-coffee-600 text-white py-3 rounded-lg hover:bg-coffee-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCreditCard} className="h-5 w-5" />
                <span>Proceed to Checkout</span>
              </button>

              <p className="text-xs text-coffee-500 text-center mt-4">
                This is a demo checkout. No actual payment will be processed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;