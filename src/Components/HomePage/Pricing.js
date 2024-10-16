import React from 'react';

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-16" id="pricing">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Pricing Plan */}
          <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-bold mb-4">Starter Plan</h4>
            <p className="text-4xl font-bold mb-4">$29/mo</p>
            <ul className="text-left text-gray-700 space-y-2">
              <li>Unlimited Deployments</li>
              <li>Basic Support</li>
              <li>100 GB Storage</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full">Choose Plan</button>
          </div>
          {/* Add more pricing plans here */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
