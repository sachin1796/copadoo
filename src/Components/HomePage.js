import React from 'react';
import NavBar from './HomePage/NavBar';
import HeroSection from './HomePage/HeroSection';
import Features from './HomePage/Features';

import Footer from './HomePage/Footer';
import Testimonials from './HomePage/Testimonials';
import Pricing from './HomePage/Pricing';

const HomePage = () => {
  return (
    <div className="App">
      {/* Navbar with navigation links */}
      <NavBar />

      {/* Hero Section - main banner */}
      <HeroSection />

      {/* Features Section showcasing products */}
      <Features />

      {/* Client testimonials */}
      <Testimonials />

      {/* Pricing section */}
      <Pricing />

      {/* Footer with contact and links */}
      <Footer />
    </div>
  );
};

export default HomePage;
