import React from 'react';
import NavBar from '../HomePage/NavBar';

const ConsultUs = () => {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-400 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <div className="text-white md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-12">
            Experience the<br />
            Copado Difference for<br />
            Yourself
          </h1>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <p className="text-lg font-medium">Book a quick discovery call with our team</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <p className="text-lg font-medium">Tell us about your team and schedule a custom demo</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <p className="text-lg font-medium">Try out CI/CD & AI-Powered Robotic Testing!</p>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Business Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Job Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <select
                  className="w-full p-3 bg-gray-50 rounded-md border border-gray-200"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ConsultUs;