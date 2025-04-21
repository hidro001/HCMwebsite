import React, { useState, useEffect, useRef } from 'react';
import Dashboard from "../assets/images/EmployeeDashboardPage.webp";
import statistics from "../assets/images/Statistics.webp";
import Database from "../assets/images/EmployeeDatabaseDashboard.webp";

const HROperationsPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState([0]);
  const sectionsRef = useRef([]);

  // Handle scroll events to track active section and visibility
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    const sectionHeight = window.innerHeight;
    const currentSection = Math.floor(scrollPosition / sectionHeight);
    
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
    
    // Check which sections are visible
    const visible = [];
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        visible.push(index);
      }
    });
    
    setVisibleSections(visible);
  };

  // Section background colors - updated to purple gradients
  const sectionColors = [
    "bg-gradient-to-br from-purple-50 to-purple-200",
    "bg-gradient-to-br from-indigo-50 to-purple-200",
    "bg-gradient-to-br from-violet-50 to-purple-200"
  ];

  // Set up intersection observer for fade animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation classes when element becomes visible
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        } else {
          entry.target.classList.remove('opacity-100');
          entry.target.classList.add('opacity-0', 'translate-y-10');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -20% 0px' 
    });

    // Get all elements to animate
    const animateElements = document.querySelectorAll('.animate-fade');
    animateElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animateElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="h-screen overflow-y-scroll scroll-smooth" 
        style={{ scrollSnapType: 'y proximity', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {/* First Section - HR Ops */}
        <section 
          ref={el => sectionsRef.current[0] = el}
          className={`min-h-screen scroll-snap-align-start relative ${sectionColors[0]} flex items-center transition-opacity duration-1000`}
        >
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                <img 
                  src={Dashboard} 
                  alt="HR Dashboard" 
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="md:w-1/2">
                <div className="mb-6 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-500">
                  <h2 className="text-4xl font-bold mb-2">Get on top <span className="text-purple-600">of HR Ops</span></h2>
                  <p className="text-gray-700 mb-6">
                    Welcome excellence in HR operations. Drive exceptional efficiency and
                    deliver a world-class HR experience to your employees. Step up productivity and brand image with
                    greyHR's core HR software.
                  </p>
                </div>

                <div className="space-y-6">
                  <FeatureRow 
                    title="Employee Lifecycle Management:" 
                    description="From onboarding and confirmation to exit, and everything in between - letters, documents, background verification, ID proof, salary revisions, income tax, etc."
                    color="purple"
                    delay="700" 
                  />
                  
                  <FeatureRow 
                    title="Workflow, Task Management & Checklists:" 
                    description="greyHR's HR Software has everything. Make use of them to improve process quality and ensure timely completion of activities."
                    color="purple"
                    delay="900"
                  />
                  
                  <FeatureRow 
                    title="Power tools:" 
                    description="To manage assets given to employees, streamline the KYE (Know Your Employee) process and enable easy data gathering and organised automatic record keeping."
                    color="purple"
                    delay="1100" 
                  />
                </div>

                <div className="flex flex-wrap gap-2 mt-8 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-1300">
                  <FeatureTag text="Offer management" color="purple" />
                  <FeatureTag text="PIVault" color="purple" />
                  <FeatureTag text="Benefits Administration" color="purple" />
                  <FeatureTag text="Assets" color="purple" />
                  <FeatureTag text="Lifecycle management" color="purple" />
                  <FeatureTag text="Document management" color="purple" />
                  <FeatureTag text="Data Drive" color="purple" />
                  <FeatureTag text="Excel Import" color="purple" />
                  <FeatureTag text="Record keeping" color="purple" />
                  <FeatureTag text="Letters & Mail Merge" color="purple" />
                  <FeatureTag text="Task and Checklists" color="purple" />
                  <FeatureTag text="API integrations" color="purple" />
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator color="purple" />
        </section>

        {/* Second Section - Communication */}
        <section 
          ref={el => sectionsRef.current[1] = el}
          className={`min-h-screen scroll-snap-align-start relative ${sectionColors[1]} flex items-center transition-opacity duration-1000`}
        >
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                <img 
                  src={statistics} 
                  alt="Communication Tools" 
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="md:w-1/2">
                <div className="mb-6 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-500">
                  <h2 className="text-4xl font-bold mb-2">Communication, <br /><span className="text-purple-600">the key to a happy workforce</span></h2>
                  <p className="text-gray-700 mb-6">
                    The importance of communication between employees can never be
                    overemphasised. It helps foster a sense of belonging, encourages teamwork and boosts productivity.
                    greyHR's cloud HR software enables omnichannel HR communication through its user friendly platform.
                  </p>
                </div>

                <div className="space-y-6">
                  <FeatureRow 
                    title="Social feed" 
                    description="for company happenings, wins, feedback, and employee interaction"
                    color="purple"
                    delay="700" 
                  />
                  
                  <FeatureRow 
                    title="Bulletin board" 
                    description="for important memos and notices"
                    color="purple"
                    delay="900" 
                  />
                  
                  <FeatureRow 
                    title="Mass email and SMS" 
                    description="facility with targeted communication to select groups of employees"
                    color="purple"
                    delay="1100" 
                  />
                  
                  <FeatureRow 
                    title="Automated greetings" 
                    description="via feeds, email and SMS for birthdays, anniversaries etc."
                    color="purple"
                    delay="1300" 
                  />
                  
                  <FeatureRow 
                    title="Configurable event & reminder" 
                    description="handling to fine-tune the triggers and messaging"
                    color="purple"
                    delay="1500" 
                  />
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator color="purple" />
        </section>

        {/* Third Section - Employee Empowerment */}
        <section 
          ref={el => sectionsRef.current[2] = el}
          className={`min-h-screen scroll-snap-align-start relative ${sectionColors[2]} flex items-center transition-opacity duration-1000`}
        >
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                <img 
                  src={Database} 
                  alt="Employee Empowerment" 
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
                />
              </div>

              <div className="md:w-1/2">
                <div className="mb-6 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-500">
                  <h2 className="text-4xl font-bold mb-2">Enable and empower<br /><span className="text-purple-600">employees</span></h2>
                  <p className="text-gray-700 mb-6">
                    Your employees deserve the best tools to manage their work experience.
                    greyHR provides a comprehensive suite of self-service tools that empower your workforce.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <FeatureRow 
                    title="Employee Self-Service Portal" 
                    description="Give employees direct access to their personal information, documents, and benefits"
                    color="purple"
                    delay="700" 
                  />
                  
                  <FeatureRow 
                    title="Digital Document Center" 
                    description="Secure access to policies, handbooks, and personal files anytime, anywhere"
                    color="purple"
                    delay="900" 
                  />
                  
                  <FeatureRow 
                    title="Performance Tracking" 
                    description="Enable employees to monitor their goals and achievements in real-time"
                    color="purple"
                    delay="1100" 
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 mt-8 animate-fade opacity-0 translate-y-10 transition-all duration-1000 delay-1300">
                  <FeatureTag text="Self-service" color="purple" />
                  <FeatureTag text="Mobile access" color="purple" />
                  <FeatureTag text="Request management" color="purple" />
                  <FeatureTag text="Profile management" color="purple" />
                  <FeatureTag text="Document access" color="purple" />
                  <FeatureTag text="Performance metrics" color="purple" />
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator color="purple" />
        </section>
      </div>
    </div>
  );
};

// Feature row component with colored dot and content
const FeatureRow = ({ title, description, color, delay }) => {
  const bgColorClass = `bg-${color}-600`;
  const textColorClass = `text-${color}-700`;
  
  return (
    <div className={`mb-6 transform hover:translate-x-2 transition-transform duration-300 animate-fade opacity-0 translate-y-10 transition-all duration-1000`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-start">
        <div className={`w-5 h-5 rounded-full ${bgColorClass} flex-shrink-0 mt-1 flex items-center justify-center mr-3`}>
          <span className="text-white text-xs">✓</span>
        </div>
        <div>
          <h3 className={`font-bold text-lg ${textColorClass}`}>{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Feature tag component with colored dot
const FeatureTag = ({ text, color }) => {
  const bgColorClass = `bg-${color}-600`;
  const borderColorClass = `border-${color}-300`;
  
  return (
    <div className={`flex items-center bg-white bg-opacity-60 rounded-full px-3 py-1 border ${borderColorClass} shadow-sm mb-2 mr-2 transform hover:scale-105 transition-transform duration-300`}>
      <div className={`w-3 h-3 rounded-full ${bgColorClass} flex items-center justify-center mr-2`}>
      </div>
      <span className="text-gray-700 text-sm">{text}</span>
    </div>
  );
};

// Scroll indicator animation
const ScrollIndicator = ({ color }) => {
  const bgColorClass = `bg-${color}-600`;
  
  return (
    <div className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full ${bgColorClass} bg-opacity-80 flex items-center justify-center cursor-pointer animate-bounce pointer-events-none text-white`}>
      ↓
    </div>
  );
};

export default HROperationsPage;