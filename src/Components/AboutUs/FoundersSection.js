// src/components/FoundersSection.js
import React from 'react';

const founders = [
  {
    name: 'John Doe',
    title: 'Co-Founder & CEO',
    description: 'John drives the vision and strategy at Edera, shaping the future of EdTech.',
    image: 'https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg', // Path to founder images
  },
  {
    name: 'Jane Smith',
    title: 'Co-Founder & CTO',
    description: 'Jane leads the technical innovation, ensuring Edera remains at the forefront of educational technology.',
    image: 'https://www.cnet.com/a/img/resize/8d159fb0c99a75843d3585dd2ae8cc9e6fa12773/hub/2017/08/03/75c3b0ae-5a2d-4d75-b72b-055247b4378f/marvelinfinitywar-captainamerica.jpg?auto=webp&fit=crop&height=1200&width=1200',
  },
];

const FoundersSection = () => (
  <section className="bg-white py-12">
    <h2 className="text-4xl font-bold text-center mb-8">Meet the Founders</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-10">
      {founders.map((founder, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
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
