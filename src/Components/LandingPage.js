import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import NavBar from './HomePage/NavBar';
import image from '../../src/i.jpg';
import Workflow from './HomePage/Workflow';
import ProductCard from './HomePage/ProductSection';

// const StageIcon = ({ icon, label, isLast }) => (
//   <div className="relative">
//     <div className="aspect-square bg-white bg-opacity-5 rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-white border-opacity-10 hover:border-opacity-20 transition-all group">
//       <div className="absolute top-4 right-4">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M4 4L8 8M8 4L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         </svg>
//       </div>
//       <div className="text-3xl mb-4">{icon}</div>
//       <div className="text-lg font-semibold">{label}</div>
//       {!isLast && (
//         <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
//           <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
//         </div>
//       )}
//     </div>
//   </div>
// );

const MetricCard = ({ value, label, isDark = false }) => (
  <div className={`rounded-xl h-72 flex flex-col justify-center items-center p-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
    <div className={`text-8xl font-bold mb-2 ${isDark ? 'text-cyan-400' : 'text-black'}`}>{value}</div>
    <div className={`text-xl ${isDark ? 'text-white' : 'text-black'}`}>{label}</div>
  </div>
);

export default function LandingPage() {
  const whatsappPhoneNumber = '9096451662';
  const defaultMessage = encodeURIComponent('Hello, I would like to inquire about Copado services!');

  return (
    <div className="min-h-screen bg-[#0D0F1D] text-white font-sans">
      <NavBar />

      <div className="container mx-auto px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            AI-Powered, People-Focused
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Copado's DevOps platform accelerates development cycles and boosts collaboration, empowering teams to build and deploy high-quality business applications faster, with less risk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to='/consult-us' className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              Book Consultation
            </Link>
            <a
              href={`https://wa.me/${whatsappPhoneNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2D3142] text-white px-6 py-3 rounded-md hover:bg-[#3D4152] transition-colors"
            >
              Contact with us
            </a>
          </div>
        </div>

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

      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
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

      <div className="container mx-auto px-8 py-16">
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Control Your End-to-End DevOps Process with Copado
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Copado's platform is built for the unique demands of business applications. 
            We align software development with your core business processes, optimize pre-built solutions, 
            and ensure continuous collaboration. This is <span className="font-semibold">DevOps for Business Applications</span>
            —agile, user-focused software tailored to your enterprise needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              Platform Overview
            </button>
          </div>
        </div>

        <Workflow />

      </div>

      <div className="container mx-auto px-8 py-16 bg-gradient-to-b from-transparent to-[#1A1C2E]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8 text-center">
            <MetricCard value="2X" label="Faster Releases" isDark={true} />
            <MetricCard value="4X" label="Faster Testing" />
          </div>

          <div className="flex justify-center">
            <img 
              src={image} 
              alt="Team collaboration" 
              className="rounded-xl object-cover w-full max-w-md"
            />
          </div>

          <div className="space-y-8 text-center">
            <MetricCard value="46%" label="Increase to Salesforce ROI" />
            <MetricCard value="20%" label="Productivity Savings" isDark={true} />
          </div>
        </div>
      </div>

      <ProductCard />

      <div className="relative w-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#0D0F1D] via-[#1a2942] to-[#0D0F1D] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative container mx-auto px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Activate AI — Accelerate DevOps
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Release Faster, Eliminate Risk, and Enjoy Your Work.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
            Try Copado Devops.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/consult-us" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity border border-transparent">
              Book Consultation
            </Link>
            <a
              href={`https://wa.me/${whatsappPhoneNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer" className="bg-transparent text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors border border-white">
              Contact with us
            </a>
          </div>
        </div>
      </div>

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
