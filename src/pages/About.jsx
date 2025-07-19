import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCoffee, FiHeart, FiUsers, FiAward } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiCoffee,
      title: 'Quality First',
      description: 'We source only the finest beans from sustainable farms around the world.'
    },
    {
      icon: FiHeart,
      title: 'Passionate Service',
      description: 'Every cup is crafted with love and attention to detail by our skilled baristas.'
    },
    {
      icon: FiUsers,
      title: 'Community Focus',
      description: 'We believe in building connections and fostering a sense of community.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'Committed to delivering exceptional experiences in every interaction.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-coffee-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-coffee-600 mb-8 max-w-3xl mx-auto">
              Founded in 2018, Brew & Beans started as a small neighborhood cafe with a big dream: 
              to create a space where exceptional coffee meets genuine hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-coffee-800 mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-coffee-600">
                <p>
                  What started as a passion project between two coffee enthusiasts has grown into 
                  a beloved community gathering place. We believe that great coffee has the power 
                  to bring people together and create meaningful moments.
                </p>
                <p>
                  Every bean we serve is carefully selected from ethical suppliers who share our 
                  commitment to sustainability and quality. Our baristas are not just skilled 
                  craftspeople – they're passionate advocates for the art of coffee making.
                </p>
                <p>
                  Today, we're proud to serve our community with the same dedication to excellence 
                  that inspired us from the very beginning. Whether you're grabbing a quick 
                  morning espresso or settling in for an afternoon of work, we're here to make 
                  your experience exceptional.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=600&h=400&fit=crop"
                alt="Coffee shop interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-600/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-coffee-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing our beans to serving our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-coffee-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-coffee-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-coffee-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-coffee-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-coffee-100 mb-8">
              Experience the difference that passion and quality make. We can't wait to serve you!
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-coffee-100">
                    123 Coffee Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-coffee-100">
                    Monday - Friday: 6:00 AM - 8:00 PM<br />
                    Saturday: 7:00 AM - 9:00 PM<br />
                    Sunday: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;