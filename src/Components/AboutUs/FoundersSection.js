// src/components/FoundersSection.js
import React from 'react';

const founders = [
  {
    name: 'John Doe',
    title: 'Co-Founder & CEO',
    description: 'John drives the vision and strategy at Edera, shaping the future of EdTech.',
    image: '/images/john-doe.jpg', // Path to founder images
  },
  {
    name: 'Jane Smith',
    title: 'Co-Founder & CTO',
    description: 'Jane leads the technical innovation, ensuring Edera remains at the forefront of educational technology.',
    image: '/images/jane-smith.jpg',
  },
];

const FoundersSection = () => (
  <section className="bg-white py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Meet the Founders</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {founders.map((founder, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img className="w-32 h-32 rounded-full mx-auto mb-4" src={founder.image} alt={founder.name} />
          <h3 className="text-xl font-bold">{founder.name}</h3>
          <p className="text-sm text-gray-600">{founder.title}</p>
          <p className="mt-2 text-gray-700">{founder.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FoundersSection;
