import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between p-4 items-center">
        <h1 className="text-2xl font-bold text-blue-600">Copado Clone</h1>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#blog" className="hover:text-blue-600">Blog</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-4 bg-white">
          <a href="#features" className="block py-2">Features</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#blog" className="block py-2">Blog</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
