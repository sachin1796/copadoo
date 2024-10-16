import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-center text-white" id="home">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Accelerate Your DevOps Journey
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
        className="mt-6 text-lg"
      >
        Empower your business with next-gen tools for faster delivery.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="mt-10 px-8 py-4 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-100"
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default HeroSection;
