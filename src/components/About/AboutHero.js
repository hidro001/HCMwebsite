import React, { useState, useEffect } from 'react';

const HRMSSoftware = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloating((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-40 bg-green-300 p-20 mt-36 rounded-lg flex items-center justify-between">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="inline-block px-4 py-1 bg-green-200 rounded-full text-gray-800 font-medium text-sm mb-4">
            HRMS SOFTWARE
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Only HR Software You Need
          </h1>

          <p className="text-lg text-gray-800 mb-6">
            We at Human Maximizer believe every organization should value its people. Our modern
            <span className="text-green-700 font-bold"> HCM</span> software was created to help you manage your staff more effectively
            and simply. As a result, companies are better able to hire, retain, and develop employees.
          </p>

          <a href="#"
            className="inline-block px-8 py-3 bg-green-900 text-white font-medium rounded-full hover:bg-green-800 transition-colors">
            Explore Now
          </a>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-green-600 rounded-full"></div>
            <img className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              src="https://t4.ftcdn.net/jpg/05/84/65/25/360_F_584652599_s89lyUhPSMfX5YsRlKsa1AglJT7vNioO.jpg"
              alt="HR professional with task dashboard" />
            {/* Task Dashboard Element */}
            <div className="absolute top-[60%] -right-6 bg-white p-3 rounded-lg shadow-lg transform rotate-3 translate-x-1/2 float">
              <p className="text-sm font-medium text-gray-800">My Tasks</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 bg-green-200 rounded"></div>
                <div>
                  <p className="text-sm font-bold">13</p>
                  <p className="text-xs text-gray-600">Things to review</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 bg-green-200 rounded"></div>
                <div>
                  <p className="text-sm font-bold">4</p>
                  <p className="text-xs text-gray-600">Things to monitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRMSSoftware;