import React from 'react';
import NavBar from './Components/HomePage/NavBar';
import HeroSection from './Components/HomePage/HeroSection';
import Features from './Components/HomePage/Features';

import Footer from './Components/HomePage/Footer';
import Testimonials from './Components/HomePage/Testimonials';
import Pricing from './Components/HomePage/Pricing';

const App = () => {
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

export default App;
