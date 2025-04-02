import React from 'react';
import {Logo} from "../assets/images/logo.png";

const GreytHRFooter = () => {
  return (
    <footer className="bg-[#12121a] text-white py-12 border-t border-gray-200 select-none">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#116B9E]">HR Software</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Payroll Software</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Leave Management</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Attendance Management</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Performance Management</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Employee Self Service</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Employee Engagement</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Unite Marketplace</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Recruitment Software</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Human Service Status</a></li>
            </ul>
          </div>

          {/* HR & Payroll Administration Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">HR & Payroll Administration</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#116B9E]">What is HRMS?</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">What is Payroll?</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">What is Statutory Compliance?</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Guide to Leave Management</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Guide to Attendance Management</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Guide to Performance Management</a></li>
              {/* <li><a href="#" className="text-white hover:text-[#116B9E]">Holiday Lists 2023</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Holiday Lists 2024</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Holiday Lists 2025</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Gender Inclusivity Report 2024</a></li> */}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#116B9E]">Blogs</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Guides</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Templates</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Webinars</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Podcasts</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Academy</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Community Forums</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Statutory Wiki</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Case Studies</a></li>
            </ul>
          </div>

          {/* greytHR Customers Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Human Maximizer Customers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#116B9E]">Maximizer Help</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Login</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Videos</a></li>
            </ul>
            <div className="mt-4 space-y-3">
              <a href="#" className="block">
                <img 
                  src="/api/placeholder/180/53" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="/api/placeholder/180/53" 
                  alt="Available on the App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#116B9E]">About</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Customers</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Payroll Service Providers</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Partners</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Plans & Pricing</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Newsroom</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Careers</a></li>
              <li><a href="#" className="text-white hover:text-[#116B9E]">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Logo, Certifications, and Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <a href="#">
                <img 
                  src="{Logo}" 
                  alt="Human Maximizer Logo" 
                  className="h-12"
                />
              </a>
            </div>

            {/* Certifications */}
            <div className="flex space-x-4">
              <img src="/api/placeholder/50/50" alt="GDPR Certification" className="h-10" />
              <img src="/api/placeholder/50/50" alt="AICPA SOC 2 Certification" className="h-10" />
              <img src="/api/placeholder/50/50" alt="BSI ISO 27001 Certification" className="h-10" />
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#116B9E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                </svg>
                <span className="ml-2 text-white">Message us on WhatsApp</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 text-[#116B9E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
                <span className="ml-2 text-white">
                  Razor Infotech Saket Western Marg New Delhi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GreytHRFooter;