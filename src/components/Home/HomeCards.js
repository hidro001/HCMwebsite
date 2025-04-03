import React, { useState, useEffect, useRef } from "react";

const HRManagementTools = () => {
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const [textColorIndex, setTextColorIndex] = useState(0);
  const sectionRef = useRef(null);

  // Colors for text animation
  const colorClasses = ["text-blue-600", "text-purple-600", "text-green-600", "text-pink-600"];

  // Handle text color animation
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setTextColorIndex((prevIndex) => (prevIndex + 1) % colorClasses.length);
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);

  // Handle section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle card hover animations
  useEffect(() => {
    if (isVisible) {
      const cardInterval = setInterval(() => {
        setActiveCardIndex((prevIndex) => {
          if (prevIndex >= toolsData.length - 1) {
            return -1;
          }
          return prevIndex + 1;
        });
      }, 3000);

      return () => clearInterval(cardInterval);
    }
  }, [isVisible]);

  const toolsData = [
    {
      title: "Employee Data Management",
      color: "blue",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      link: "employee-data-management.html",
    },
    {
      title: "Task Management",
      color: "green",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      link: "task-management.html",
    },
    {
      title: "Leave Management",
      color: "yellow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "leave-management.html",
    },
    {
      title: "Payroll Management",
      color: "pink",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "payroll-management.html",
    },
    {
      title: "Performance Management",
      color: "purple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      link: "performance-management.html",
    },
    {
      title: "Resignation F&F",
      color: "pink",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
      link: "resignation-ff.html",
    },
    {
      title: "Training Development",
      color: "green",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      link: "training-development.html",
    },
    {
      title: "Recruitment Portal",
      color: "blue",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      link: "recruitment-portal.html",
    },
    {
      title: "Benefits Administration",
      color: "green",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "benefits-administration.html",
    },
    {
      title: "Time Tracking",
      color: "yellow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "time-tracking.html",
    },
    {
      title: "Compliance Management",
      color: "pink",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      link: "compliance-management.html",
    },
    {
      title: "Employee Onboarding",
      color: "purple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      link: "employee-onboarding.html",
    },
    {
      title: "Employee Self-Service",
      color: "pink",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>
      ),
      link: "employee-self-service.html",
    },
    {
      title: "Workflow Automation",
      color: "purple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      link: "workflow-automation.html",
    },
    {
      title: "Expense Management",
      color: "blue",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      link: "expense-management.html",
    },
    {
      title: "HR Analytics",
      color: "green",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      link: "hr-analytics.html",
    },
  ];

  const ToolCard = ({ title, color, icon, link, index }) => {
    const renderTitle = () => {
      const titleParts = title.split(" ");
      return titleParts.length > 1 ? (
        <>
          <h3 className={`text-xl font-bold mb-1 ${activeCardIndex === index ? 'animate-text-pulse' : ''}`}>
            {titleParts[0]}
          </h3>
          <h3 className={`text-xl font-bold ${activeCardIndex === index ? 'animate-text-pulse' : ''}`}>
            {titleParts.slice(1).join(" ")}
          </h3>
        </>
      ) : (
        <h3 className={`text-xl font-bold ${activeCardIndex === index ? 'animate-text-pulse' : ''}`}>
          {title}
        </h3>
      );
    };

    return (
      <div
        className={`bg-${color}-50 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 ${
          activeCardIndex === index ? `transform scale-105 shadow-lg` : ''
        }`}
      >
        <div className="mb-4 relative">
          <div
            className={`bg-${color}-50 w-16 h-16 rounded-full absolute -top-4 -right-4 z-0 ${
              activeCardIndex === index ? 'animate-ping-slow' : ''
            }`}
          ></div>
          <div className={`relative z-10 flex items-center justify-center ${
            activeCardIndex === index ? 'animate-bounce-gentle' : ''
          }`}>
            {icon}
          </div>
        </div>
        {renderTitle()}
      </div>
    );
  };

  // Split the title for animation
  const titleWords = [
    "Effective",
    "Human Maximizer",
    "Tools To",
    "Improve Workforce Management"
  ];

  return (
    <div className="w-full pb-20 px-4 md:px-20 lg:px-40" ref={sectionRef}>
      <div className="mx-auto pb-12 select-none">
        <h1 className="text-center text-4xl font-bold overflow-hidden">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-black mr-2 inline-block">{titleWords[0]}</span>
            <span className={`${colorClasses[textColorIndex]} mr-4 inline-block transition-colors duration-700`}>{titleWords[1]}</span>
            <span className="text-black inline-block">{titleWords[2]}</span>
          </div>
          <br className="sm:hidden" />
          <div className={`mt-2 block transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-black relative inline-block animated-underline">{titleWords[3]}</span>
          </div>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolsData.map((tool, index) => (
          <div
            key={index}
            className={`transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${100 + index * 100}ms` }}
          >
            <ToolCard
              title={tool.title}
              color={tool.color}
              icon={tool.icon}
              link={tool.link}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Add animation keyframes via style tag */}
      <style jsx>{`
        @keyframes textPulse {
          0%, 100% { color: currentColor; }
          50% { color: #3B82F6; }
        }
        
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes underlineAnimation {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes bounceGentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-text-pulse {
          animation: textPulse 2s infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }
        
        .animate-ping-slow {
          animation: pingSlow 3s infinite;
        }
        
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899);
          animation: underlineAnimation 2s forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default HRManagementTools;