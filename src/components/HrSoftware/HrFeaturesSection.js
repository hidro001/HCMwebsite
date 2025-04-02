import React from 'react';
import Employee from "../../assets/images/EmployeeManagementPage.webp";

const FeaturesSection = () => {
  return (
    <div>
      {/* Illustration Area */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
        <img
          id="sliderTrigger"
          src={Employee}
          alt="Human Maximizer Dashboard Engage Dashboard"
          className="w-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:ring-4 hover:ring-[#3D9DD1]"
        />
      </div>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">HR Management Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md h-64 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#E0F3FC] cursor-pointer">
        <div className="bg-[#E0F3FC] text-[#3D9DD1] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#3D9DD1]">Employee Profiles</h3>
        <p className="text-gray-600">
          Create comprehensive digital profiles with all relevant employee information securely stored in one place.
        </p>
      </div>
      
      {/* Feature 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md h-64 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#F9ECED] cursor-pointer">
        <div className="bg-[#F9ECED] text-[#E8949A] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#E8949A]">Document Management</h3>
        <p className="text-gray-600">
          Centralize all employee documents, contracts, and certificates with secure access control and easy retrieval.
        </p>
      </div>
      
      {/* Feature 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md h-64 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#F4F2A2] cursor-pointer">
        <div className="bg-[#F4F2A2] text-[#EAB308] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#EAB308]">Analytics & Reporting</h3>
        <p className="text-gray-600">
          Generate insightful reports on team performance, attendance, and other KPIs to make data-driven decisions.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default FeaturesSection;
