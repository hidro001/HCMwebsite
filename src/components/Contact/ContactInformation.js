import React from 'react';

const HelpHRJourneySection = () => {
  return (
    <div className="w-full pt-20">
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Customer Support & Resources</h1>
        <p className="mt-2 text-lg text-gray-600">Helping you succeed with expert support and valuable resources</p>
      </div>

      <div className="mx-40 flex flex-col md:flex-row space-x-8">
        {/* Help Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 mb-6 md:mb-0 md:mr-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>

          <p className="text-gray-700 mb-4">
            Our support team is here to help! We're committed to making sure your experience with us is seamless and hassle-free.
          </p>

          <div className="mb-4">
            <p className="font-medium text-gray-700">Support Hours:</p>
            <p className="text-gray-700">Monday to Friday from 6 AM to 6 PM MT</p>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-700">Toll Free:</p>
            <a href="tel:1-866-387-9595" className="text-green-600 hover:underline">
              1-866-387-9595
            </a>
          </div>

          <div className="mb-6">
            <p className="font-medium text-gray-700">Email:</p>
            <a href="mailto:support@bamboohr.com" className="text-green-600 hover:underline">
              support@bamboohr.com
            </a>
          </div>

          <a href="#" className="inline-flex items-center text-green-700 font-medium hover:text-green-800">
            View the Help Center
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>


        {/* HR Journey Section */}
        <div className="bg-green-50 p-8 rounded-lg w-full md:w-2/3 lg:w-1/2 relative flex flex-col text-left shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Start Your HR Journey With Us!
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Unlock the full potential of your HR management with BambooHR.
            Experience seamless hiring, employee tracking, and much more!
          </p>

          {/* Key Benefits */}
          <div className="space-y-4 mb-6 w-full">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 font-medium">Automate HR tasks effortlessly</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 font-medium">Enhance team collaboration</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 font-medium">Seamless payroll and benefits</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center w-fit">
            Get a Demo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>


      </div>
    </div>
  );
};

export default HelpHRJourneySection;