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
  <section className="bg-gray-100 py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img className="w-32 h-32 rounded-full mx-auto mb-4" src={member.image} alt={member.name} />
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.title}</p>
          <p className="mt-2 text-gray-700">{member.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
