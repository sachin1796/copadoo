// src/components/CompanyInfo.js
import React from 'react';
import { Link } from 'react-router-dom';

const CompanyInfo = () => (
  <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-white py-16 md:py-24 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
        About Us
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Edera is an innovative EdTech company transforming the way education is delivered. 
        With cutting-edge technology, we aim to provide accessible, scalable, and impactful learning solutions for everyone.
      </p>
      <div className="space-x-4 flex justify-center">
        <Link to="/consult-us" className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
          Get in Touch
        </Link>
      </div>
    </div>
  </section>
);

export default CompanyInfo;
