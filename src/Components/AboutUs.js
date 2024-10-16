// src/components/AboutUs.js
import React from 'react';
import CompanyInfo from './AboutUs/CompanyInfo';
import FoundersSection from './AboutUs/FoundersSection';
import TeamSection from './AboutUs/TeamSection';
import VisionStatement from './AboutUs/VisionStatement';

const AboutUs = () => (
  <div>
    <CompanyInfo />
    <FoundersSection />
    <TeamSection />
    <VisionStatement />
  </div>
);

export default AboutUs;
