import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
// import {Link} from "react-router-dom"
import NavBar from './HomePage/NavBar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0F1D] text-white font-sans">
      {/* Navigation Bar */}
      <NavBar/>
      

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            AI-Powered, People-Focused
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Copado's DevOps platform accelerates development cycles and boosts collaboration, empowering teams to build and deploy high-quality business applications faster, with less risk.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              Watch a Demo
            </button>
            <button className="bg-[#2D3142] text-white px-6 py-3 rounded-md hover:bg-[#3D4152] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Infinity Loop Diagram */}
        <div className="relative">
          <div className="bg-[#1A1C2E] rounded-2xl p-8">
            <div className="relative aspect-square">
              <div className="absolute inset-0">
                <svg viewBox="0 0 200 100" className="w-full">
                  <path
                    d="M50,50 A25,25 0 1,1 100,50 A25,25 0 1,1 150,50 A25,25 0 1,1 100,50 A25,25 0 1,1 50,50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="path-animation"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00B4E6" />
                      <stop offset="50%" stopColor="#7B5AE3" />
                      <stop offset="100%" stopColor="#00B4E6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* DevOps Stage Icons */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-xs">PLAN</span>
                  </div>

                </div>
                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-xs">BUILD</span>
                  </div>
                </div>
                <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xs">TEST</span>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                    <span className="text-xs">DEPLOY</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-center">FROM PLAN TO OPERATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Agents Card */}
          <div className="bg-[#1A1C2E] rounded-lg overflow-hidden hover:bg-[#2D3142] transition-colors">
            <div className="p-6">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                <img src="/api/placeholder/400/320" alt="DevOps AI Agents" className="h-40 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">Introducing AI Agents for Every DevOps Stage</h3>
              <p className="text-gray-300 mb-4">Check out Copado's new DevOps AI agents - Empower your teams to innovate faster than ever!</p>
              <button className="text-cyan-400 flex items-center hover:underline">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Salesforce Guide Card */}
          <div className="bg-[#1A1C2E] rounded-lg overflow-hidden hover:bg-[#2D3142] transition-colors">
            <div className="p-6">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                <img src="/api/placeholder/400/320" alt="Salesforce Guide" className="h-40 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">How to Simplify Salesforce as You Scale: A Developer's Guide</h3>
              <p className="text-gray-300 mb-4">Discover how to leverage user stories, manage conflicts and organize environments for maximum efficiency in Copado's comprehensive guide.</p>
              <button className="text-cyan-400 flex items-center hover:underline">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-8 py-8">
          <p className="text-center text-lg font-bold text-gray-300">TRUSTED BY 1200+ COMPANIES</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
        .path-animation {
          stroke-dasharray: 50;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
