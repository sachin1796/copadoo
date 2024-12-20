// src/components/AboutUs.js
import React from 'react';
import CompanyInfo from './AboutUs/CompanyInfo';
import FoundersSection from './AboutUs/FoundersSection';
import TeamSection from './AboutUs/TeamSection';
import VisionStatement from './AboutUs/VisionStatement';
import NavBar from './HomePage/NavBar';

const AboutUs = () => (
  <>
  <NavBar />
  <section className='pt-16 pb-1'>
    <CompanyInfo />
    <FoundersSection />
    <TeamSection />
    <VisionStatement />
  </section>
  </>

);

export default AboutUs;
