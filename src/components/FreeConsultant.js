import React, { useState, useEffect } from 'react';
import HRBackground from "../assets/images/HRBackground.webp";

const BusinessContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [screenSize, setScreenSize] = useState('desktop');
  
  // Check screen size and set appropriate view
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="relative bg-gray-100 select-none overflow-hidden">
      {/* Background image section with responsive height */}
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
        {/* Background image for the blue section */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HRBackground} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay to make content more visible */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content container on top of the background */}
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Left section with text */}
          <div className="w-full md:w-1/2 flex items-center justify-center text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Build a stronger,<br className="hidden sm:block" /> engaged workforce with our HCM software
              </h1>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center">
                  {/* Content area - empty for now */}
                </div>
              </div>
              
              {/* Button with responsive padding and sizing */}
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base">
                Request a Free Trial
              </button>
            </div>
          </div>

          {/* Right side for positioning the form */}
          <div className="hidden md:block md:w-1/2 relative">
            {/* Form placeholder to ensure proper layout */}
            <div className="h-full"></div>
          </div>
        </div>
      </div>

      {/* Form container positioned differently based on screen size */}
      <div className={`
        ${screenSize === 'mobile' ? 'relative w-full px-4 py-6 -mt-6 bg-white' : 
          screenSize === 'tablet' ? 'absolute right-8 top-1/3 transform -translate-y-1/4 w-5/12 z-20 px-4' : 
          'absolute right-24 top-1/3 transform -translate-y-1/4 w-4/12 z-20'}
      `}>
        <div className={`w-full bg-white rounded-lg shadow-xl border border-gray-100 ${screenSize === 'mobile' ? '' : 'mx-auto'}`}>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-orange-500 font-medium mb-1 sm:mb-2 text-sm sm:text-base">GET IN TOUCH</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Free Consultation</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 sm:mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div className="mb-3 sm:mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div className="mb-3 sm:mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div className="mb-4 sm:mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 h-24 sm:h-32 text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-4 rounded-md transition duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                Free Consultant
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Empty space below to account for form overflow - responsive height */}
      <div className={`bg-white ${screenSize === 'mobile' ? 'h-4' : 'h-32 sm:h-48 md:h-64 lg:h-72'}`}></div>
    </div>
  );
};

export default BusinessContactSection;