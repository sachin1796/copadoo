// src/components/AboutUs.js
import React from 'react';
import CompanyInfo from './AboutUs/CompanyInfo';
import FoundersSection from './AboutUs/FoundersSection';
import TeamSection from './AboutUs/TeamSection';
import VisionStatement from './AboutUs/VisionStatement';
import NavBar from './HomePage/NavBar';
import Footer from './HomePage/Footer';

const AboutUs = () => (
  <>
  <NavBar />
  <section className='py-16'>
    <CompanyInfo />
    <FoundersSection />
    <TeamSection />
    <VisionStatement />
  </section>
  <Footer />
  </>

);

export default AboutUs;
