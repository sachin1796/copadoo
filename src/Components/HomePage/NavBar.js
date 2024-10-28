import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Search, ChevronRight, Settings, Code, TestTube, Rocket, Activity, Calendar, FileText, BookOpen, Users, Briefcase } from 'lucide-react';import {Link} from 'react-router-dom';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);


  const resourceItems = [
    {
      icon: <FileText className="w-4 h-4" />,
      title: "All Resources",
      description: "Explore our DevOps resource library.",
      href: "/resources"
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      title: "Events & Webinars",
      description: "Where's Copado headed next? See our upcoming schedule.",
      href: "/events"
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: "Support & Documentation",
      description: "DevOps terms, definitions and step-by-step instructions.",
      href: "/support"
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Whitepapers & Datasheets",
      description: "Thought leadership and key info from industry experts.",
      href: "/whitepapers"
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: "Ebooks & Reports",
      description: "Ready for a DevOps deep dive? Read our latest research.",
      href: "/ebooks"
    },
    {
      icon: <TestTube className="w-4 h-4" />,
      title: "Demo Library",
      description: "Watch Copado capabilities in action with our video hub.",
      href: "/demos"
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Copado Blog",
      description: "Articles full of tips & tactics written by Copado users.",
      href: "/blog"
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Copado Community",
      description: "Learn Copado on the world's largest DevOps community.",
      href: "/community"
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: "Copado Careers",
      description: "Want to Join Team Copado? See current job openings.",
      href: "/careers"
    }
  ];


  const menuItems = [
    {
      title: 'By Stage',
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: 'Plan',
          description: 'Smarter project planning with AI insights.'
        },
        {
          icon: <Code className="w-4 h-4" />,
          title: 'Build',
          description: 'Speed up development with AI automation.'
        },
        {
          icon: <TestTube className="w-4 h-4" />,
          title: 'Test',
          description: 'Boost testing with AI-powered efficiency.'
        },
        {
          icon: <Rocket className="w-4 h-4" />,
          title: 'Release',
          description: 'Streamline deployments with AI automation.'
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: 'Operate',
          description: 'Optimize performance with AI-driven insights.'
        }
      ]
    },
    {
      title: 'By Technology',
      items: [
        {
          icon: <Code className="w-4 h-4" />,
          title: 'Cloud Computing',
          description: 'Build and deploy cloud-native applications.'
        },
        {
          icon: <Settings className="w-4 h-4" />,
          title: 'DevOps',
          description: 'Streamline your development operations.'
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: 'MLOps',
          description: 'Machine learning operations and automation.'
        }
      ]
    },
    {
      title: 'By Role',
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: 'Developers',
          description: 'Tools and resources for developers.'
        },
        {
          icon: <TestTube className="w-4 h-4" />,
          title: 'QA Engineers',
          description: 'Testing and quality assurance solutions.'
        },
        {
          icon: <Rocket className="w-4 h-4" />,
          title: 'DevOps Engineers',
          description: 'Infrastructure and deployment automation.'
        }
      ]
    },
    {
      title: 'By Industry',
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: 'Financial Services',
          description: 'Solutions for banking and finance.'
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: 'Healthcare',
          description: 'Healthcare technology solutions.'
        },
        {
          icon: <Code className="w-4 h-4" />,
          title: 'Retail',
          description: 'Digital solutions for retail industry.'
        }
      ]
    }
  ];



  return (
    <nav className="flex items-center justify-between px-8 py-4 relative font-bold">
      <div className="flex items-center space-x-8">
        <div className="flex items-center">
          {/* Copado Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
            <span className="ml-2 text-xl font-bold">
              <Link to="/" className="hover:text-cyan-400">COPADO</Link>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex space-x-6">
          <div className="group relative">
            <button className="hover:text-cyan-400 flex items-center">
              Products <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>
          </div>
          <div className="group relative">
            <button 
              className="hover:text-cyan-400 flex items-center"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
            >
              {/* <span className="cursor-pointer">Solutions</span>  */}
              <Link to={'/solution'}>Solutions</Link>
              <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>
            
            {activeDropdown === 'solutions' && (
              <div 
                className="absolute left-0 top-full pt-2 z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-64 bg-white rounded-lg shadow-lg">
                  {menuItems.map((menu) => (
                    <div 
                      key={menu.title} 
                      className="relative group/submenu"
                    >
                      <button className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100">
                        <span className="text-sm font-medium text-gray-700">{menu.title}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      <div className="hidden group-hover/submenu:block absolute left-full top-0 w-80 bg-white rounded-lg shadow-lg ml-2">
                        {menu.items.map((item) => (
                          <div
                            key={item.title}
                            className="p-4 hover:bg-gray-50 cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-gray-600 mt-1">{item.icon}</div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="group relative">
            <button className="hover:text-cyan-400 flex items-center">
              {/* <span className="cursor-pointer">About Us</span> */}
              <Link to={'/about-us'}>About</Link>
              <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>
          </div>
          {/* <div className="group relative">
            <button className="hover:text-cyan-400 flex items-center">
              Resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>
          </div> */}


<div className="group relative">
            <button 
              className="hover:text-cyan-400 flex items-center"
              onMouseEnter={() => setActiveDropdown('resources')}
              onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
            >
              Resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>
            
            {activeDropdown === 'resources' && (
              <div 
                className="absolute -left-20 top-full pt-2 z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-[800px] bg-white rounded-lg shadow-lg grid grid-cols-2 gap-2 p-4">
                  {resourceItems.map((item, index) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className={`p-4 hover:bg-gray-50 rounded-lg ${index === 0 ? 'col-span-2' : ''}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-gray-600 mt-1">{item.icon}</div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        {index === 0 && <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <button className="hover:text-cyan-400">Pricing</button> */}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex space-x-4 items-center">
          {/* <button className="text-sm hover:text-cyan-400">Community Login</button> */}
          <button className="text-sm hover:text-cyan-400">DevOps Exchange</button>
          <button className="text-sm hover:text-cyan-400">Partners</button>
        </div>
        <Search className="w-5 h-5" />
        <Link to="/consult-us">
        <button className="bg-[#2D3142] text-white px-4 py-2 rounded-md hover:bg-[#3D4152] transition-colors">
          Book Consultation
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;