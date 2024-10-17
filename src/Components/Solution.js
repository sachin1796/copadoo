import React from 'react';
import { ChevronRight } from 'lucide-react';
import NavBar from './HomePage/NavBar';

// Feature card component for the top section
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-blue-600 flex items-center hover:underline">
      Learn More <ChevronRight className="w-4 h-4 ml-1" />
    </button>
  </div>
);

// Content section with image component
const ContentSection = ({ title, description, imageSrc, buttonText, imagePosition = 'right' }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 py-12 ${
    imagePosition === 'left' ? 'md:flex-row-reverse' : ''
  }`}>
    <div className="flex-1 space-y-4">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
        {buttonText}
      </button>
    </div>
    <div className="flex-1">
      <img src={imageSrc} alt={title} className="rounded-lg shadow-lg w-full" />
    </div>
  </div>
);

export default function Solution() {
  return (
    <>
        <NavBar/>
    
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Copado's Capabilities for DevOps Leads: Centralize, Consolidate, Automate
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Elevate your capabilities together and serve your team to deliver exponential business value
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>}
            title="One End-to-End Platform"
            description="Work with one DevOps platform across all your projects, teams, and environments for unified processes and better results."
          />
          <FeatureCard
            icon={<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>}
            title="Automated Delivery Process"
            description="Streamline your delivery process with automation, reducing manual effort and increasing deployment speed."
          />
          <FeatureCard
            icon={<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>}
            title="Simplified Governance"
            description="Maintain control and compliance with automated governance tools and comprehensive audit trails."
          />
        </div>

        {/* How Does Copado Help Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          How Does Copado Help DevOps Leads Deliver Salesforce Success?
        </h2>

        {/* Content Sections */}
        <ContentSection
          title="Cloud Security"
          description="Collaborate with tech teams, create transparent feedback loops, and accelerate digital transformation."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKTspz7jtFcWw7rrIhagq1byqYMom7AXd6Q&s"
          buttonText="Watch a Demo"
        />

        <ContentSection
          title="MLOps"
          description="Add value through DevOps best practices while eliminating your technical debt and increasing productivity."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst0Uw6GFdDlswkz3B2BNlJ1dMB1ZbVco86Q&s"
          buttonText="Watch a Demo"
          imagePosition="left"
        />

        <ContentSection
          title="Cyber Security"
          description="Track team performance using data-driven metrics and make faster learning to identify bottlenecks and plan for improvement."
          imageSrc="https://static.vecteezy.com/system/resources/thumbnails/006/950/568/small_2x/cyber-security-data-protection-business-concept-on-virtual-screen-shield-protect-icon-in-wireframe-robotic-hand-antivirus-interface-illustration-vector.jpg"
          buttonText="Watch a Demo"
        />
        <ContentSection
          title="Cloud Computing"
          description="Add value through DevOps best practices while eliminating your technical debt and increasing productivity."
          imageSrc="https://media.licdn.com/dms/image/D5612AQEqJqAHMdW2_Q/article-cover_image-shrink_720_1280/0/1708394467259?e=2147483647&v=beta&t=ZAtMFiIdRhdxI7lfMp5w3vdg_2KH4ydvld0tWmM_D60"
          buttonText="Watch a Demo"
          imagePosition="left"
        />
        <ContentSection
          title="DevOps"
          description="Track team performance using data-driven metrics and make faster learning to identify bottlenecks and plan for improvement."
          imageSrc="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/6453f14b83b4a36b72707435_7602%201.png"
          buttonText="Watch a Demo"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your DevOps Journey?</h2>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
