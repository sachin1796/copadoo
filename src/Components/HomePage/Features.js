import React from 'react';

const features = [
  {
    title: 'Automated Pipelines',
    description: 'Deploy with confidence using CI/CD.',
    icon: '🚀',
  },
  {
    title: 'Intelligent Insights',
    description: 'AI-driven analytics to improve workflows.',
    icon: '🤖',
  },
  {
    title: 'Security & Compliance',
    description: 'Secure your devops process with compliance tools.',
    icon: '🔒',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-16" id="features">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
            >
              <span className="text-4xl">{feature.icon}</span>
              <h4 className="text-xl font-bold mt-4">{feature.title}</h4>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
