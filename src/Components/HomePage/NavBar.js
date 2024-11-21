import React, { useState } from "react";
import { Infinity } from 'lucide-react';
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
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      description:
        "Optimize your DevOps ecosystem with flexible, pre-built integrations.",
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
          title: "DevOps Overview",
          description: "Power & Protect Development with DevOps.",
          href: "/devops-overview",
        },
        // {
        //   icon: <Code className="w-4 h-4" />,
        //   title: "CI/CD",
        //   description: "Unlock Continuous Innovation with CI/CD Pipelines.",
        //   href: "/ci-cd",
        // },
        // {
        //   icon: <Activity className="w-4 h-4" />,
        //   title: "Agile Planning",
        //   description: "Drive maximum value with agile planning.",
        //   href: "/agile-planning",
        // },
        // {
        //   icon: <TestTube className="w-4 h-4" />,
        //   title: "Quality Assurance",
        //   description: "Transform QA with automated testing and quality gates.",
        //   href: "/quality-assurance",
        // },
        // {
        //   icon: <Code className="w-4 h-4" />,
        //   title: "Extensibility",
        //   description: "Extend the Copado Platform by executing Functions.",
        //   href: "/extensibility",
        // },
      ],
    },
    {
      title: "DevOps/MLOps",
      items: [
        {
          icon: <Rocket className="w-4 h-4" />,
          title: "Robotic Testing Overview",
          description: "Automated testing for your applications.",
          href: "/robotic-testing",
        },
        // {
        //   icon: <Code className="w-4 h-4" />,
        //   title: "Salesforce Testing",
        //   description: "Specialized testing for Salesforce applications.",
        //   href: "/salesforce-testing",
        // },
        // {
        //   icon: <Settings className="w-4 h-4" />,
        //   title: "Mobile Testing",
        //   description: "Comprehensive testing for mobile applications.",
        //   href: "/mobile-testing",
        // },
        // {
        //   icon: <Activity className="w-4 h-4" />,
        //   title: "Copado Explorer",
        //   description: "Explore and analyze your testing results.",
        //   href: "/copado-explorer",
        // },
        // {
        //   icon: <TestTube className="w-4 h-4" />,
        //   title: "TestAgent",
        //   description: "Automated test execution agent.",
        //   href: "/test-agent",
        // },
      ],
    },
    {
      title: "Compliances",
      items: [
        {
          icon: <Rocket className="w-4 h-4" />,
          title: "Copado AI",
          description: "Salesforce DevOps Made Easy with AI-Powered Automation",
          href: "/copado-ai",
          badge: "New",
        },
      ],
    },
    {
      title: "Cybersecurity",
      items: [
        {
          icon: <Settings className="w-4 h-4" />,
          title: "Essentials Overview",
          description: "Streamline deployments with fast and easy DevOps.",
          href: "/essentials",
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

  return (
    <nav className="flex items-center justify-between px-8 py-4 relative font-bold">
      <div className="flex items-center space-x-8">
        <div className="flex items-center">
          {/* Copado Logo */}
          <div className="flex items-center">
            {/* <div className="w-8 h-8 bg-cyan-400 rounded-full"></div> */}
            <span className="ml-2 text-xl font-bold">
              {/* <Link to="/" className="hover:text-cyan-400">
                COPADO
              </Link> */}
              {/* <Infinity className="w-8 h-8 text-[#00B6F0]" /> */}
              <Link to='/' className="flex items-center space-x-2">
              <Infinity className="w-8 h-8 text-[#00B6F0]" />
              <span className="text-2xl font-bold">COPADO</span>
            </Link>
            </span>
          </div>
        </div>
        <div className="hidden lg:flex space-x-6">
          <div className="group relative">
            <button
              className="hover:text-cyan-400 flex items-center"
              onMouseEnter={() => setActiveDropdown("products")}
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "products" ? null : "products"
                )
              }
            >
              Products <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>

            {activeDropdown === "products" && (
              <div
                className="absolute -left-20 top-full pt-2 z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-[800px] bg-white rounded-lg shadow-lg p-4">
                  <div className="grid grid-cols-2 gap-6">
                    {productItems.map((section) => (
                      <div key={section.title} className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {section.title}
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="block p-3 hover:bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-start gap-3">
                                <div className="text-gray-600 mt-1">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-sm font-medium text-gray-900">
                                      {item.title}
                                    </h4>
                                    {item.badge && (
                                      <span className="px-2 py-1 text-xs font-medium text-white bg-cyan-400 rounded-full">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-500">
                                    {item.description}
                                  </p>
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

          <div className="group relative">
            <button
              className="hover:text-cyan-400 flex items-center"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "solutions" ? null : "solutions"
                )
              }
            >
              <Link to={"/solution"}>Solutions</Link>
              <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>

            {activeDropdown === "solutions" && (
              <div
                className="absolute left-0 top-full pt-2 z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-64 bg-white rounded-lg shadow-lg">
                  {menuItems.map((menu) => (
                    <div key={menu.title} className="relative group/submenu">
                      <button className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100">
                        <span className="text-sm font-medium text-gray-700">
                          {menu.title}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="hidden group-hover/submenu:block absolute left-full top-0 w-80 bg-white rounded-lg shadow-lg ml-2">
                        {menu.items.map((item) => (
                          <div
                            key={item.title}
                            className="p-4 hover:bg-gray-50 cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-gray-600 mt-1">
                                {item.icon}
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
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
            <button
              className="hover:text-cyan-400 flex items-center"
              onMouseEnter={() => setActiveDropdown("about")}
              onClick={() =>
                setActiveDropdown(activeDropdown === "about" ? null : "about")
              }
            >
              <Link to={"/about-us"}>About</Link>{" "}
              <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>

            {activeDropdown === "about" && (
              <div
                className="absolute -left-20 top-full pt-2 z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-[800px] bg-white rounded-lg shadow-lg p-4">
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
                              <h4 className="text-sm font-medium text-gray-900">
                                {item.title}
                              </h4>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs font-medium text-white bg-cyan-400 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="group relative">
            <button
              className="hover:text-cyan-400 flex items-center"
              onMouseEnter={() => setActiveDropdown("resources")}
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "resources" ? null : "resources"
                )
              }
            >
              Resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
            </button>

            {activeDropdown === "resources" && (
              <div
                className="absolute -left-20 top-full pt-2 z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="w-[800px] bg-white rounded-lg shadow-lg grid grid-cols-2 gap-2 p-4">
                  {resourceItems.map((item, index) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className={`p-4 hover:bg-gray-50 rounded-lg ${
                        index === 0 ? "col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-gray-600 mt-1">{item.icon}</div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        {index === 0 && (
                          <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex space-x-4 items-center">
          {/* <button className="text-sm hover:text-cyan-400">Community Login</button> */}
          <button className="text-sm hover:text-cyan-400">
            DevOps Exchange
          </button>
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
