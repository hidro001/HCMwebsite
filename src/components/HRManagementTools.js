import React from 'react';
import Dashboard from "../assets/images/EmployeeDashboardPage.webp";

const WorkforceEmpowerment = () => {
  return (
    <div className="bg-[#E6F2FB] py-16">
      <div className="container mx-auto px-4">
        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Header with accent bar */}
          <div className="relative mb-12">
            <div className="h-2 bg-gradient-to-r from-[#305B9C] via-[#18B9F6] to-[#B2D469] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23527C] mt-6 text-center">
              Human Maximizer
            </h2>
            <p className="text-center text-[#106C9B] text-lg mt-2">Future-proof workforce management</p>
          </div>
          
          {/* Main content with cards layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Feature Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-3 bg-[#305B9C]"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#E6F2FB] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-[#305B9C] mb-3">Talent Analytics</h3>
                <p className="text-[#23527C]">
                  Advanced AI-powered insights to identify patterns and optimize your workforce potential.
                </p>
                <a href="#" className="inline-block mt-4 text-[#18B9F6] font-medium hover:text-[#106C9B]">
                  Learn more →
                </a>
              </div>
            </div>
            
            {/* Center Feature/Hero Card */}
            <div className="bg-gradient-to-b from-[#305B9C] to-[#106C9B] rounded-2xl shadow-xl overflow-hidden row-span-2 transform transition-all duration-300 hover:shadow-2xl">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">Empower Your Workforce</h2>
                <p className="mb-6">
                  Streamline engagement and boost productivity with our intelligent platform.
                </p>
                <img 
                  src={Dashboard} 
                  alt="Dashboard Preview"
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                />
                <div className="flex justify-center">
                  <button className="px-6 py-3 bg-[#B2D469] text-[#23527C] font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Feature Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-3 bg-[#18B9F6]"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#E6F2FB] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-[#305B9C] mb-3">Performance Boost</h3>
                <p className="text-[#23527C]">
                  Improve operational efficiency and team productivity with automated workflows.
                </p>
                <a href="#" className="inline-block mt-4 text-[#18B9F6] font-medium hover:text-[#106C9B]">
                  Learn more →
                </a>
              </div>
            </div>
            
            {/* Bottom Stats Bar */}
            <div className="col-span-1 md:col-span-3 bg-white rounded-xl shadow-lg p-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-[#106C9B] text-sm uppercase font-medium">Companies</p>
                  <p className="text-3xl font-bold text-[#305B9C]">500+</p>
                </div>
                <div className="text-center">
                  <p className="text-[#106C9B] text-sm uppercase font-medium">Efficiency Increase</p>
                  <p className="text-3xl font-bold text-[#305B9C]">37%</p>
                </div>
                <div className="text-center">
                  <p className="text-[#106C9B] text-sm uppercase font-medium">Employee Satisfaction</p>
                  <p className="text-3xl font-bold text-[#305B9C]">92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceEmpowerment;