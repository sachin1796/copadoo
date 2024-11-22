import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import NavBar from './HomePage/NavBar';
import image from '../../src/i.jpg';
import devops from '../../src/assets/devops.png';
import salesforce from '../../src/assets/salesforce.jpg';
import Workflow from './HomePage/Workflow';
import ProductCard from './HomePage/ProductSection';
import cycle from '../assets/cycle.gif';

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
          Revolutionizing Development with Copado
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
          Copado's DevOps and MLOps platform accelerates software development, enhances collaboration, and ensures faster, high-quality business application deployment with reduced risk.
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

        <div className='bg-white'>
          <img src={cycle} alt="" />
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A1C2E] rounded-lg overflow-hidden hover:bg-[#2D3142] transition-colors">
            <div className="p-6">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                <img src={devops} alt="DevOps AI Agents" className="h-40 object-contain" />
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
                <img src={salesforce} alt="Salesforce Guide" className="h-40 object-contain" />
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
    </div>
  );
}
