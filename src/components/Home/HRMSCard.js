import React, { useState, useEffect } from 'react';

// SVG Icon Component
const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Card Component with Fade animations
const HRMSCard = ({
  bgColor,
  iconBgColor,
  title,
  description,
  icon = <DocumentIcon />,
  isVisible
}) => {
  return (
    <div
      className={`${bgColor} rounded-lg p-5 shadow-md transition-all duration-500 hover:shadow-lg hover:scale-105 hover:${bgColor.replace('50', '100')} cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-start">
        <div
          className={`${iconBgColor} h-9 w-9 rounded-full flex items-center justify-center text-white mb-3`}
        >
          {icon}
        </div>
      </div>
      <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-700">
        {description}
      </p>
    </div>
  );
};

// HRMS Cards Section Component
const HRMSCardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  
  // Fade in on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to handle fade out
  const handleFadeOut = () => {
    setIsLeaving(true);
    setTimeout(() => {
      // This would typically be where you navigate away or unmount the component
      console.log("Component has faded out");
      // For demonstration purposes only - in a real app, you'd use router navigation here
      setIsLeaving(false);
      setIsVisible(false);
    }, 500);
  };

  const scrollbarHideStyles = `
    ::-webkit-scrollbar {
      display: none;
    }
    body {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
    
    .fade-in {
      animation: fadeIn 0.5s ease-in-out forwards;
    }
    
    .fade-out {
      animation: fadeOut 0.5s ease-in-out forwards;
    }
  `;

  const cardsData = [
    {
      bgColor: "bg-green-50",
      iconBgColor: "bg-green-500",
      title: "You don't have an HRMS, and running HR ops on Sheets",
      description: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave, and attendance."
    },
    {
      bgColor: "bg-pink-50",
      iconBgColor: "bg-purple-500",
      title: "Your payroll solution is unstable, requires hours of manual work",
      description: "Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual payroll processes and remove any manual error."
    },
    {
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-500",
      title: "Most HR and payroll tasks are manual, clerical, and take hours to complete",
      description: "Give access to the best-in-category leave management solution for efficient leave management"
    },
    {
      bgColor: "bg-yellow-50",
      iconBgColor: "bg-orange-500",
      title: "You're still using old ways to capture and track leaves and attendance",
      description: "150+ basic and advanced admin reports covering Leave and Attendance, Payroll, MIS, Claims, Welfare, and State-level Policies"
    },
    {
      bgColor: "bg-green-50",
      iconBgColor: "bg-orange-500",
      title: "You don't have an HRMS, and running HR ops on Sheets",
      description: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave, and attendance"
    },
    {
      bgColor: "bg-purple-50",
      iconBgColor: "bg-orange-500",
      title: "You don't have an HRMS, and running HR ops on Sheets",
      description: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave, and attendance"
    }
  ];

  return (
    <div className={`w-full pb-20 px-40 transition-opacity duration-500 ${isLeaving ? 'fade-out' : 'fade-in'}`}>
      {/* Heading Section */}
      <div className="pb-12 select-none">
        {/* Add style tag to inject scrollbar hiding CSS and animations */}
        <style>{scrollbarHideStyles}</style>

        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Everyone gets <span className="text-[#8FA83F]">value</span> from day 1
          </h1>
          <p className={`text-lg text-gray-600 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A platform loved by everyone in your company - by employers and employees
          </p>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <HRMSCard
            key={index}
            bgColor={card.bgColor}
            iconBgColor={card.iconBgColor}
            title={card.title}
            description={card.description}
            isVisible={isVisible}
            style={{ transitionDelay: `${100 + index * 100}ms` }}
          />
        ))}
      </div>
      
      
    </div>
  );
};

export default HRMSCardsSection;