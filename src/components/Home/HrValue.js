import React, { useState, useEffect, useRef } from 'react';
import CIOImage from '../../assets/images/chro.webp';
import CHROImage from '../../assets/images/chro.webp';
import PayrollAdminImage from '../../assets/images/PayrollAdmin.webp';
import ManagersImage from '../../assets/images/Managers.webp';
import EmployeesImage from '../../assets/images/Employees.webp';

// Add CSS to hide scrollbar while keeping scrolling functionality
const scrollbarHideStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const GreytHRValueSection = () => {
  const [selectedRole, setSelectedRole] = useState('CIO');
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Check if the screen size is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Scroll carousel to selected role
  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const roleIndex = Object.keys(roleDetails).indexOf(selectedRole);
      const cardWidth = carouselRef.current.querySelector('div').offsetWidth;
      const scrollPosition = roleIndex * cardWidth;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [selectedRole, isMobile]);

  // Handle carousel scroll for mobile
  const handleCarouselScroll = () => {
    if (isMobile && carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.querySelector('div').offsetWidth;
      const roleIndex = Math.round(scrollPosition / cardWidth);
      const roles = Object.keys(roleDetails);

      if (roles[roleIndex] && roles[roleIndex] !== selectedRole) {
        setSelectedRole(roles[roleIndex]);
      }
    }
  };

  // Navigation functions
  const navigatePrev = () => {
    const roles = Object.keys(roleDetails);
    const currentIndex = roles.indexOf(selectedRole);
    if (currentIndex > 0) {
      setSelectedRole(roles[currentIndex - 1]);
    }
  };

  const navigateNext = () => {
    const roles = Object.keys(roleDetails);
    const currentIndex = roles.indexOf(selectedRole);
    if (currentIndex < roles.length - 1) {
      setSelectedRole(roles[currentIndex + 1]);
    }
  };

  // Detailed content for each role
  const roleDetails = {
    CIO: {
      image: CIOImage,
      title: "Chief Information Officer",
      content: "As a CIO, greytHR helps you centralize all HR data in one secure platform. Monitor company-wide analytics, ensure compliance with data regulations, and optimize IT resources by eliminating the need for multiple HR systems.",
      benefits: [
        "Streamline IT infrastructure with a single HR solution",
        "Ensure data security and compliance",
        "Reduce operational IT costs with cloud-based HR",
        "Access real-time analytics dashboards for strategic decision making"
      ]
    },
    CHRO: {
      image: CHROImage,
      title: "Chief Human Resources Officer",
      content: "For CHROs, greytHR provides comprehensive workforce insights and strategic planning tools. Track employee engagement, design effective compensation structures, and align HR initiatives with company objectives.",
      benefits: [
        "Gain comprehensive visibility into workforce metrics",
        "Streamline HR strategy implementation",
        "Improve employee experience and retention rates",
        "Generate detailed compliance and HR effectiveness reports"
      ]
    },
    PayrollAdmin: {
      image: PayrollAdminImage,
      title: "Payroll Administrator",
      content: "Payroll Admins can automate complex calculations, manage statutory compliance, and process payroll with just a few clicks. greytHR handles tax calculations, deductions, and generates detailed reports for simplified payroll management.",
      benefits: [
        "Automate payroll processing and calculations",
        "Stay compliant with changing tax regulations",
        "Reduce manual errors in salary computations",
        "Generate detailed reports for auditing and planning"
      ]
    },
    Managers: {
      image: ManagersImage,
      title: "Team Managers",
      content: "Team Managers can finally take it easy! Streamline team management (attendance, leaves, performance, shifts) and improve team communication. Look at team reports and increase overall productivity. Run timely appraisals, manage shifts, and simplify approval processes.",
      benefits: [
        "Simplify team attendance and leave management",
        "Access team performance insights in real-time",
        "Streamline approval workflows for requests",
        "Improve communication with automated notifications"
      ]
    },
    Employees: {
      image: EmployeesImage,
      title: "Employees",
      content: "Employees gain access to self-service options for managing leaves, viewing pay details, and tracking performance goals. With mobile access, employees can stay connected to company updates, apply for leaves, and check important HR information anytime, anywhere.",
      benefits: [
        "Submit leave requests and check balances instantly",
        "Access pay slips and tax declarations securely",
        "Track personal performance goals and feedback",
        "Participate in company surveys and feedback channels"
      ]
    }
  };

  // Check if navigation arrows should be shown
  const roles = Object.keys(roleDetails);
  const currentIndex = roles.indexOf(selectedRole);
  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < roles.length - 1;

  return (
    <div className="mx-40 py-20 select-none">
      {/* Add style tag to inject scrollbar hiding CSS */}
      <style>{scrollbarHideStyles}</style>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Everyone gets <span className="text-purple-600">value</span> from day 1
        </h1>
        <p className="text-lg text-gray-600">
          A platform loved by everyone in your company - by employers and employees
        </p>
      </div>

      {/* Role Selection - Desktop: Cards, Mobile: Carousel */}
      {isMobile ? (
        <div className="mb-12 relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
            onScroll={handleCarouselScroll}
          >
            {Object.keys(roleDetails).map((role) => (
              <div
                key={role}
                className={`snap-center flex-shrink-0 w-40 mx-2 flex flex-col items-center border rounded-lg p-6 
                  ${selectedRole === role ? 'bg-purple-100 border-purple-300 shadow-md' : 'bg-white'}
                `}
                onClick={() => setSelectedRole(role)}
              >
                {/* Role icons */}
                <div className="mb-3">
                  {role === 'CIO' && (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <rect x="10" y="15" width="30" height="30" rx="4" fill="#8ED1B7" />
                      <circle cx="25" cy="18" r="10" fill="#FFF" />
                      <path d="M18 18 Q25 10, 32 18" stroke="#000" strokeWidth="1.5" fill="none" />
                    </svg>
                  )}
                  {role === 'CHRO' && (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <rect x="10" y="15" width="30" height="30" rx="4" fill="#FFC872" />
                      <circle cx="25" cy="18" r="10" fill="#FFF" />
                      <path d="M20 16 L30 16 L25 23 Z" fill="#000" />
                    </svg>
                  )}
                  {role === 'PayrollAdmin' && (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="20" r="15" fill="#4CAF50" />
                      <path d="M20 20 L30 20 M25 15 L25 25" stroke="white" strokeWidth="3" />
                    </svg>
                  )}
                  {role === 'Managers' && (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <rect x="10" y="15" width="30" height="30" rx="4" fill="#58C5F0" />
                      <circle cx="25" cy="18" r="10" fill="#FFF" />
                      <path d="M20 18 Q25 22, 30 18" stroke="#000" strokeWidth="1.5" fill="none" />
                    </svg>
                  )}
                  {role === 'Employees' && (
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <rect x="10" y="15" width="30" height="30" rx="4" fill="#FFC872" />
                      <circle cx="25" cy="18" r="10" fill="#FFF" />
                      <path d="M20 16 Q25 22, 30 16" stroke="#000" strokeWidth="1.5" fill="none" />
                    </svg>
                  )}
                </div>
                <span className="font-medium">{role}</span>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={navigatePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 flex items-center justify-center"
              aria-label="Previous role"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={navigateNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 flex items-center justify-center"
              aria-label="Next role"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(roleDetails).map((role) => (
            <div
              key={role}
              className={`border rounded-lg p-6 w-40 flex flex-col items-center cursor-pointer transition-all duration-300 ${selectedRole === role ? 'bg-purple-100 border-purple-300 shadow-md' : 'bg-white hover:bg-gray-50'
                }`}
              onClick={() => setSelectedRole(role)}
            >
              {/* Simple role icons */}
              <div className="mb-3">
                {role === 'CIO' && (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <rect x="10" y="15" width="30" height="30" rx="4" fill="#8ED1B7" />
                    <circle cx="25" cy="18" r="10" fill="#FFF" />
                    <path d="M18 18 Q25 10, 32 18" stroke="#000" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
                {role === 'CHRO' && (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <rect x="10" y="15" width="30" height="30" rx="4" fill="#FFC872" />
                    <circle cx="25" cy="18" r="10" fill="#FFF" />
                    <path d="M20 16 L30 16 L25 23 Z" fill="#000" />
                  </svg>
                )}
                {role === 'PayrollAdmin' && (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="20" r="15" fill="#4CAF50" />
                    <path d="M20 20 L30 20 M25 15 L25 25" stroke="white" strokeWidth="3" />
                  </svg>
                )}
                {role === 'Managers' && (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <rect x="10" y="15" width="30" height="30" rx="4" fill="#58C5F0" />
                    <circle cx="25" cy="18" r="10" fill="#FFF" />
                    <path d="M20 18 Q25 22, 30 18" stroke="#000" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
                {role === 'Employees' && (
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <rect x="10" y="15" width="30" height="30" rx="4" fill="#FFC872" />
                    <circle cx="25" cy="18" r="10" fill="#FFF" />
                    <path d="M20 16 Q25 22, 30 16" stroke="#000" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </div>
              <span className="font-medium">{role}</span>
            </div>
          ))}
        </div>
      )}

      {/* Selected Role Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="bg-purple-100 pl-6 pt-6 rounded-lg flex justify-center items-center shadow-sm">
          <img
            src={roleDetails[selectedRole].image}
            alt={`${selectedRole} interface`}
            className="max-w-full h-auto rounded"
          />
        </div>

        {/* Content Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">{roleDetails[selectedRole].title}</h2>
          <p className="text-gray-700 mb-6">{roleDetails[selectedRole].content}</p>

          <h3 className="text-lg font-medium text-gray-800 mb-3">Key Benefits:</h3>
          <ul className="space-y-2">
            {roleDetails[selectedRole].benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Without/With greytHR comparison */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {/* Without GreytHR */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6">Without Human Maximizer</h2>
          <ul className="space-y-4">
            {[
              'Time-consuming approvals.',
              'Challenges in performance monitoring.',
              'Administrative overload'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center mr-3 mt-1">
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* With GreytHR */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">With Human Maximizer</h2>
          <p className="text-gray-700">
            Team Managers can finally take it easy! Streamline team management (attendance, leaves, performance, shifts) and improve team communication. Look at team reports and increase overall productivity. Run timely appraisals, manage shifts, and simplify approval processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreytHRValueSection;