import React, { useState, useEffect } from 'react';
import Dashboard from "../assets/images/EmployeeDashboardPage.webp";
import statistics from "../assets/images/Statistics.webp";
import Database from "../assets/images/EmployeeDatabaseDashboard.webp";

const HROperationsPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Handle scroll events to track active section
  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollTop;
    const sectionHeight = window.innerHeight;
    const currentSection = Math.floor(scrollPosition / sectionHeight);
    
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="h-screen overflow-y-scroll scroll-smooth" 
        style={{ scrollSnapType: 'y proximity', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {/* First Section - HR Ops */}
        <section className="min-h-screen scroll-snap-align-start relative bg-white flex items-center">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0">
                <img src={Dashboard} alt="HR Dashboard" className="w-full rounded-lg shadow-lg" />
              </div>

              <div className="md:w-1/2">
                <div className="mb-6">
                  <h2 className="text-4xl font-bold mb-2">Get on top <span className="text-purple-700">of HR Ops</span></h2>
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
                  />
                  
                  <FeatureRow 
                    title="Workflow, Task Management & Checklists:" 
                    description="greyHR's HR Software has everything. Make use of them to improve process quality and ensure timely completion of activities." 
                  />
                  
                  <FeatureRow 
                    title="Power tools:" 
                    description="To manage assets given to employees, streamline the KYE (Know Your Employee) process and enable easy data gathering and organised automatic record keeping." 
                  />
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  <FeatureTag text="Offer management" />
                  <FeatureTag text="PIVault" />
                  <FeatureTag text="Benefits Administration" />
                  <FeatureTag text="Assets" />
                  <FeatureTag text="Lifecycle management" />
                  <FeatureTag text="Document management" />
                  <FeatureTag text="Data Drive" />
                  <FeatureTag text="Excel Import" />
                  <FeatureTag text="Record keeping" />
                  <FeatureTag text="Letters & Mail Merge" />
                  <FeatureTag text="Task and Checklists" />
                  <FeatureTag text="API integrations" />
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        {/* Second Section - Communication */}
        <section className="min-h-screen scroll-snap-align-start relative bg-white flex items-center">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0">
                <img src={statistics} alt="Communication Tools" className="w-full rounded-lg shadow-lg" />
              </div>

              <div className="md:w-1/2">
                <div className="mb-6">
                  <h2 className="text-4xl font-bold mb-2">Communication, <br />the key to a happy workforce</h2>
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
                  />
                  
                  <FeatureRow 
                    title="Bulletin board" 
                    description="for important memos and notices" 
                  />
                  
                  <FeatureRow 
                    title="Mass email and SMS" 
                    description="facility with targeted communication to select groups of employees" 
                  />
                  
                  <FeatureRow 
                    title="Automated greetings" 
                    description="via feeds, email and SMS for birthdays, anniversaries etc." 
                  />
                  
                  <FeatureRow 
                    title="Configurable event & reminder" 
                    description="handling to fine-tune the triggers and messaging" 
                  />
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        {/* Third Section - Employee Empowerment */}
        <section className="min-h-screen scroll-snap-align-start relative bg-white flex items-center">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/5 mb-8 md:mb-0">
                <img src={Database} alt="Employee Empowerment" className="w-full rounded-lg shadow-lg" />
              </div>

              <div className="md:w-1/2">
                <div className="mb-6">
                  <h2 className="text-4xl font-bold mb-2">Enable and empower<br />employees</h2>
                  <p className="text-gray-700 mb-6">
                    Your employees deserve the best tools to manage their work experience.
                    greyHR provides a comprehensive suite of self-service tools that empower your workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Feature row component with purple dot and content
const FeatureRow = ({ title, description }) => {
  return (
    <div className="mb-6">
      <div className="flex items-start">
        <div className="w-5 h-5 rounded-full bg-purple-600 flex-shrink-0 mt-1 flex items-center justify-center mr-3">
          <span className="text-white text-xs">✓</span>
        </div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Feature tag component with purple dot
const FeatureTag = ({ text }) => {
  return (
    <>
      <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
        <span className="text-white text-xs">•</span>
      </div>
      <span className="text-gray-700">{text}</span>
    </>
  );
};

// Scroll indicator animation
const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center cursor-pointer animate-pulse pointer-events-none">
      ↓
    </div>
  );
};

export default HROperationsPage;