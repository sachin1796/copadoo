import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import {Link} from "react-router-dom"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            {/* Copado Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
              <span className="ml-2 text-xl font-bold"><Link to="/">COPADO</Link></span>
            </div>
          </div>
          <div className="hidden lg:flex space-x-6">
            <div className="group relative">
              <button className="hover:text-cyan-400 flex items-center">
                Products <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
              </button>
            </div>
            <div className="group relative">
                
                <button className="hover:text-cyan-400 flex items-center">
                <Link to="/solution">Solutions</Link> <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>

                
            </div>
            <div className="group relative">
              <button className="hover:text-cyan-400 flex items-center">
                <Link to="/about-us">About Us</Link> <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
              </button>
            </div>
            <div className="group relative">
              <button className="hover:text-cyan-400 flex items-center">
                Resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
              </button>
            </div>
            <button className="hover:text-cyan-400">Pricing</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4 items-center">
            <button className="text-sm hover:text-cyan-400">Community Login</button>
            <button className="text-sm hover:text-cyan-400">DevOps Exchange</button>
            <button className="text-sm hover:text-cyan-400">Partners</button>
          </div>
          <Search className="w-5 h-5" />
          <button className="bg-[#2D3142] text-white px-4 py-2 rounded-md hover:bg-[#3D4152] transition-colors">
            Book a Demo
          </button>
        </div>
      </nav>
  );
};

export default NavBar;
