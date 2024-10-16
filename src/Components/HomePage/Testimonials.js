import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John Doe', feedback: 'This platform has revolutionized our CI/CD process.' },
  { name: 'Jane Smith', feedback: 'Incredible customer support and powerful automation tools!' },
  { name: 'Bob Johnson', feedback: 'Our team’s productivity has increased significantly.' },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">What Our Clients Say</h3>
        <div className="space-x-8 flex overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="p-8 bg-gray-100 shadow-md rounded-md flex-shrink-0 w-1/3"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg text-gray-700">“{testimonial.feedback}”</p>
              <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
