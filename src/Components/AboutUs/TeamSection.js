// src/components/TeamSection.js
import React from 'react';

const teamMembers = [
  {
    name: 'Emily Clark',
    title: 'Product Manager',
    description: 'Emily ensures our product meets the highest standards.',
    image: 'https://rukminim2.flixcart.com/image/850/1000/l12h1u80/poster/k/q/z/small-baby-groot-multicolour-photo-paper-print-poster-original-imagcqfvhth6j9nt.jpeg?q=90&crop=false',
  },
  {
    name: 'Michael Adams',
    title: 'Lead Developer',
    description: 'Michael leads the technical team to deliver scalable solutions.',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Rocket_in_Avengers_Endgame.jpeg',
  },
  {
    name: 'Drax Adams',
    title: 'Lead Developer',
    description: 'Michael leads the technical team to deliver scalable solutions.',
    image: 'https://cdn.marvel.com/content/1x/025drx_ons_inl_03_3.jpg',
  },
  // Add more team members
];

const TeamSection = () => (
  <section className="bg-gradient-to-r from-indigo-50 via-purple-100 to-indigo-200 py-16">
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
      Our Team
    </h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <img 
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white" 
            src={member.image} 
            alt={member.name} 
          />
          <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.title}</p>
          <p className="mt-4 text-gray-700">{member.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
