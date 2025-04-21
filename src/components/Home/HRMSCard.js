import React, { useState, useEffect } from 'react';

const HRMSCardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // SVG for decorative circle/underline effect
  const CircleUnderline = () => (
    <svg viewBox="0 0 200 50" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-16 z-0 rotate-3">
      <path
        d="M10,25 C40,0 160,0 190,25"
        fill="none"
        stroke="#8FA83F"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );

  // HRMS value data
  const hrmsValues = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "You don't have an HRMS, and running HR ops on Sheets",
      description: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave, and attendance."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Your payroll solution is unstable, requires hours of manual work",
      description: "Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual payroll processes and remove any manual error."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Most HR and payroll tasks are manual, clerical, and take hours to complete",
      description: "Give access to the best-in-category leave management solution for efficient leave management"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "You're still using old ways to capture and track leaves and attendance",
      description: "150+ basic and advanced admin reports covering Leave and Attendance, Payroll, MIS, Claims, Welfare, and State-level Policies"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "You don't have an HRMS, and running HR ops on Sheets",
      description: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave, and attendance"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "You don't have an HRMS, and running HR ops on Sheets",
      description: "Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave, and attendance"
    }
  ];

  // Animation effect on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Custom styles for animations
  const scrollbarHideStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
      animation: fadeIn 0.5s ease-in-out forwards;
    }
  `;

  return (
    <section
      aria-labelledby="hrms-value-heading"
      className="py-16 sm:py-20 bg-blue-50 relative overflow-hidden select-none"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-32 sm:w-40 lg:w-48 opacity-75"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M80,10 Q90,30 70,40 T50,70 T20,90"
            stroke="#8FA83F"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div
          className="absolute bottom-0 left-0 w-40 h-40 bg-green-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"
          aria-hidden="true"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Add style tag for animations */}
        <style>{scrollbarHideStyles}</style>

        {/* Section Header */}
        <header className="text-center mb-16">
          <p className="text-green-600 font-semibold text-lg sm:text-xl mb-3">
            Our Platform
          </p>
          <h2
            id="hrms-value-heading"
            className="text-gray-800 text-3xl sm:text-4xl lg:text-4xl font-bold leading-snug"
          >
            Everyone gets
            <span className="relative inline-block mx-2">
              <span className="relative z-10">value</span>
              <CircleUnderline />
            </span>
            from day 1
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A platform loved by everyone in your company - by employers and employees
          </p>
        </header>

        {/* Core Values Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hrmsValues.map((value, index) => (
              <article
                key={index}
                className={`bg-white shadow-lg px-6 py-10 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    index % 3 === 0 ? 'bg-green-100' : 
                    index % 3 === 1 ? 'bg-purple-100' : 'bg-blue-100'
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRMSCardsSection;