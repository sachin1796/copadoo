import React, { useState} from "react";
import { Infinity, Menu, X } from 'lucide-react';
import {
  Search,
  ChevronRight,
  Settings,
  Code,
  TestTube,
  Rocket,
  Activity,
  Calendar,
  FileText,
  BookOpen,
  Users,
  Briefcase,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Define text color classes based on current route
  const textColorClass = isHomePage ? 'text-white' : 'text-gray-900';
  const hoverColorClass = isHomePage ? 'hover:text-gray-200' : 'hover:text-cyan-400';
  const iconColorClass = isHomePage ? 'text-white' : 'text-gray-600';

  const aboutItems = [
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: "About Copado",
      description: "Learn how Copado got started and meet our people.",
      href: "/about-us",
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Customer Stories",
      description: "Tales of DevOps transformation from around the world.",
      href: "/customer-stories",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: "Partners",
      description: "Let's team up to deliver more value for joint customers.",
      href: "/partners",
    },
    {
      icon: <Settings className="w-4 h-4" />,
      title: "Professional Services",
      description: "DevOps experts to accelerate time to value.",
      href: "/professional-services",
    },
    {
      icon: <Code className="w-4 h-4" />,
      title: "Integrations",
      description: "Optimize your DevOps ecosystem with flexible, pre-built integrations.",
      href: "/integrations",
    },
    {
      icon: <TestTube className="w-4 h-4" />,
      title: "Security Center",
      description: "Enterprise-grade protection for every cloud environment.",
      href: "/security",
    },
    {
      icon: <Activity className="w-4 h-4" />,
      title: "ROI Calculator",
      description: "How could Copado help your team? Crunch the numbers!",
      href: "/roi-calculator",
    },
    {
      icon: <Rocket className="w-4 h-4" />,
      title: "Applications",
      description: "AI-Powered Devops for Seamless Automation",
      href: "/applications",
      badge: "New",
    },
  ];

  const productItems = [
    {
      title: "ITGC",
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: "ITGC Overview",
          description: "Strengthen your IT governance to safeguard data and optimize processes.",
          href: "/",
        },
      ],
    },
    {
      title: "DevOps/MLOps",
      items: [
        {
          icon: <Rocket className="w-4 h-4" />,
          title: "DevOps Overview",
          description: "Power & Protect Development with DevOps.",
          href: "/",
        },
      ],
    },
    {
      title: "IT Compliances",
      items: [
        {
          icon: <Rocket className="w-4 h-4" />,
          title: "IT Compliances Overview",
          description: "Ensure regulatory compliance with industry standards and best practices.",
          href: "/",
          // badge: "New",
        },
      ],
    },
    {
      title: "Cybersecurity",
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: "Cybersecurity Overview",
          description: "Protect your business from evolving threats with advanced security.",
          href: "/",
        },
      ],
    },
  ];

  const resourceItems = [
    {
      icon: <FileText className="w-4 h-4" />,
      title: "All Resources",
      description: "Explore our DevOps resource library.",
      href: "/resources",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      title: "Events & Webinars",
      description: "Where's Copado headed next? See our upcoming schedule.",
      href: "/events",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: "Support & Documentation",
      description: "DevOps terms, definitions and step-by-step instructions.",
      href: "/support",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Whitepapers & Datasheets",
      description: "Thought leadership and key info from industry experts.",
      href: "/whitepapers",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: "Ebooks & Reports",
      description: "Ready for a DevOps deep dive? Read our latest research.",
      href: "/ebooks",
    },
    {
      icon: <TestTube className="w-4 h-4" />,
      title: "Demo Library",
      description: "Watch Copado capabilities in action with our video hub.",
      href: "/demos",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Copado Blog",
      description: "Articles full of tips & tactics written by Copado users.",
      href: "/blog",
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Copado Community",
      description: "Learn Copado on the world's largest DevOps community.",
      href: "/community",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: "Copado Careers",
      description: "Want to Join Team Copado? See current job openings.",
      href: "/careers",
    },
  ];

  const menuItems = [
    {
      title: "By Stage",
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: "Plan",
          description: "Smarter project planning with AI insights.",
        },
        {
          icon: <Code className="w-4 h-4" />,
          title: "Build",
          description: "Speed up development with AI automation.",
        },
        {
          icon: <TestTube className="w-4 h-4" />,
          title: "Test",
          description: "Boost testing with AI-powered efficiency.",
        },
        {
          icon: <Rocket className="w-4 h-4" />,
          title: "Release",
          description: "Streamline deployments with AI automation.",
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Operate",
          description: "Optimize performance with AI-driven insights.",
        },
      ],
    },
    {
      title: "By Technology",
      items: [
        {
          icon: <Code className="w-4 h-4" />,
          title: "Cloud Computing",
          description: "Build and deploy cloud-native applications.",
        },
        {
          icon: <Settings className="w-4 h-4" />,
          title: "DevOps",
          description: "Streamline your development operations.",
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "MLOps",
          description: "Machine learning operations and automation.",
        },
      ],
    },
    {
      title: "By Role",
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: "Developers",
          description: "Tools and resources for developers.",
        },
        {
          icon: <TestTube className="w-4 h-4" />,
          title: "QA Engineers",
          description: "Testing and quality assurance solutions.",
        },
        {
          icon: <Rocket className="w-4 h-4" />,
          title: "DevOps Engineers",
          description: "Infrastructure and deployment automation.",
        },
      ],
    },
    {
      title: "By Industry",
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: "Financial Services",
          description: "Solutions for banking and finance.",
        },
        {
          icon: <Activity className="w-4 h-4" />,
          title: "Healthcare",
          description: "Healthcare technology solutions.",
        },
        {
          icon: <Code className="w-4 h-4" />,
          title: "Retail",
          description: "Digital solutions for retail industry.",
        },
      ],
    },
  ];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className={`relative font-bold ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to='/' className="flex items-center space-x-2">
              <Infinity className="w-8 h-8 text-[#00B6F0]" />
              <span className={`text-2xl font-bold ${textColorClass}`}>COPADO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
            <div className="flex space-x-6">
              {/* Products Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center ${textColorClass} ${hoverColorClass}`}
                  onMouseEnter={() => setActiveDropdown("products")}
                  onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                >
                  Products <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                {/* Dropdown content remains the same */}
                {activeDropdown === "products" && (
                  <div className="absolute -left-20 top-full pt-2 z-50 w-[800px]" onMouseLeave={() => setActiveDropdown(null)}>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="grid grid-cols-2 gap-6">
                        {productItems.map((section) => (
                          <div key={section.title} className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-900">{section.title}</h3>
                            <div className="space-y-2">
                              {section.items.map((item) => (
                                <a
                                  key={item.title}
                                  href={item.href}
                                  className="block p-3 hover:bg-gray-50 rounded-lg"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="text-gray-600 mt-1">{item.icon}</div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                                        {item.badge && (
                                          <span className="px-2 py-1 text-xs font-medium text-white bg-cyan-400 rounded-full">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center ${textColorClass} ${hoverColorClass}`}
                  onMouseEnter={() => setActiveDropdown("solutions")}
                  onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                >
                  <Link to="/solution">Solutions</Link>
                  {/* <ChevronRight className="w-4 h-4 ml-1 rotate-90" /> */}
                </button>
                {/* Dropdown content remains the same */}
                {/* {activeDropdown === "solutions" && (
                  <div className="absolute left-0 top-full pt-2 z-50" onMouseLeave={() => setActiveDropdown(null)}>
                    <div className="w-64 bg-white rounded-lg shadow-lg">
                      {menuItems.map((menu) => (
                        <div key={menu.title} className="relative group/submenu">
                          <button className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100">
                            <span className="text-sm font-medium text-gray-700">{menu.title}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <div className="hidden group-hover/submenu:block absolute left-full top-0 w-80 bg-white rounded-lg shadow-lg ml-2">
                            {menu.items.map((item) => (
                              <div key={item.title} className="p-4 hover:bg-gray-50 cursor-pointer">
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
                )} */}
              </div>

              {/* About Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center ${textColorClass} ${hoverColorClass}`}
                  onMouseEnter={() => setActiveDropdown("about")}
                  onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
                >
                  <Link to="/about-us">About</Link>
                  {/* <ChevronRight className="w-4 h-4 ml-1 rotate-90" /> */}
                </button>
                {/* Dropdown content remains the same */}
                {/* {activeDropdown === "about" && (
                  <div className="absolute -left-20 top-full pt-2 z-50 w-[800px]" onMouseLeave={() => setActiveDropdown(null)}>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {aboutItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block p-3 hover:bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-gray-600 mt-1">{item.icon}</div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                                  {item.badge && (
                                    <span className="px-2 py-1 text-xs font-medium text-white bg-cyan-400 rounded-full">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )} */}
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center ${textColorClass} ${hoverColorClass}`}
                  onMouseEnter={() => setActiveDropdown("resources")}
                  onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                >
                  Resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                {/* Dropdown content remains the same */}
                {activeDropdown === "resources" && (
                  <div className="absolute -left-20 top-full pt-2 z-50" onMouseLeave={() => setActiveDropdown(null)}>
                    <div className="w-[800px] bg-white rounded-lg shadow-lg grid grid-cols-2 gap-2 p-4">
                      {resourceItems.map((item, index) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className={`p-4 hover:bg-gray-50 rounded-lg ${index === 0 ? "col-span-2" : ""}`}
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
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              <button className={`text-sm ${textColorClass} ${hoverColorClass}`}>DevOps Exchange</button>
              <button className={`text-sm ${textColorClass} ${hoverColorClass}`}>Partners</button>
              <Search className={`w-5 h-5 cursor-pointer ${iconColorClass}`} />
              <Link to="/consult-us">
                <button className="bg-[#2D3142] text-white px-4 py-2 rounded-md hover:bg-[#3D4152] transition-colors">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <Search className={`w-5 h-5 ${iconColorClass}`} />
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColorClass} ${hoverColorClass} focus:outline-none`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Always white background for better readability */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {/* Mobile menu content remains the same */}
          {/* Mobile Products */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              className="w-full flex items-center justify-between px-3 py-2 text-cyan-600 hover:bg-gray-50"
            >
              Products
              <ChevronRight className={`w-4 h-4 transition-transform ${activeDropdown === "products" ? "rotate-90" : ""}`} />
            </button>
            {activeDropdown === "products" && (
              <div className="pl-4">
                {productItems.map((section) => (
                  <div key={section.title} className="py-2 text-red-700">
                    <h3 className="px-3 py-2 text-sm font-medium text-gray-900">{section.title}</h3>
                    {section.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-center px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                        {item.badge && (
                          <span className="ml-2 px-2 py-1 text-xs font-medium text-white bg-cyan-400 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Solutions */}
          <div className="relative">
            <Link to='/solution'
              onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
              className="w-full flex items-center justify-between px-3 py-2 text-cyan-600 hover:bg-gray-50"
            >
              Solutions
              <ChevronRight className={`w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-90" : ""}`} />
            </Link>
            {activeDropdown === "solutions" && (
              <div className="pl-4">
                {menuItems.map((menu) => (
                  <div key={menu.title} className="py-2">
                    <h3 className="px-3 py-2 text-sm font-medium text-gray-900">{menu.title}</h3>
                    {menu.items.map((item) => (
                      <div key={item.title} className="flex items-center px-3 py-2 text-sm text-red-700 hover:bg-gray-50">
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile About */}
          <div className="relative">
            <Link to='/about-us'
              onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
              className="w-full flex items-center justify-between px-3 py-2 text-cyan-600 hover:bg-gray-50"
            >
              About
              <ChevronRight className={`w-4 h-4 transition-transform ${activeDropdown === "about" ? "rotate-90" : ""}`} />
            </Link>
            {activeDropdown === "about" && (
              <div className="pl-4">
                {aboutItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-sm text-red-700 hover:bg-gray-50"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium text-white bg-cyan-400 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Resources */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
              className="w-full flex items-center justify-between px-3 py-2 text-cyan-600 hover:bg-gray-50"
            >
              Resources
              <ChevronRight className={`w-4 h-4 transition-transform ${activeDropdown === "resources" ? "rotate-90" : ""}`} />
            </button>
            {activeDropdown === "resources" && (
              <div className="pl-4">
                {resourceItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-sm text-red-700 hover:bg-gray-50"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile additional links */}
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-3 space-y-2">
              <button className="block w-full text-left px-3 py-2 text-cyan-600 hover:bg-gray-50">
                DevOps Exchange
              </button>
              <button className="block w-full text-left px-3 py-2 text-cyan-600 hover:bg-gray-50">
                Partners
              </button>
              <Link to="/consult-us">
                <button className="w-full bg-[#2D3142] text-white px-4 py-2 rounded-md hover:bg-[#3D4152] transition-colors">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;