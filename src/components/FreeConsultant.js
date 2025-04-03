import React, { useState } from 'react';
import HRBackground from "../assets/images/HRBackground.webp";

const BusinessContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    <div className="relative bg-gray-100 select-none overflow-visible">
      {/* Background image section with fixed height */}
      <div className="relative h-96 md:h-128 lg:h-144">
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
          <div className="md:w-1/2 flex items-center justify-center text-white p-8">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Build a stronger,<br />engaged workforce with our HCM software</h1>
              
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-8">
                <div className="flex items-center">
                  
                 
                </div>

                
              </div>
              
              <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full">
                Request a Free Trial
              </button>
            </div>
          </div>

          {/* Right side for positioning the form */}
          <div className="md:w-1/2 relative">
            {/* Form placeholder to ensure proper layout */}
            <div className="h-full"></div>
          </div>
        </div>
      </div>

      {/* Form container positioned to overlap the section boundary */}
      <div className="absolute right-0 md:right-12 lg:right-24 top-1/2 md:top-1/3 transform -translate-y-1/4 md:w-5/12 lg:w-4/12 z-20 px-4 md:px-0">
        <div className="w-full bg-white rounded-lg shadow-xl border border-gray-100">
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <p className="text-orange-500 font-medium mb-2">GET IN TOUCH</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Free Consultation</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 h-32"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
              >
                Free Consultant
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Empty space below to account for form overflow */}
      <div className="h-64 md:h-72 bg-white"></div>
    </div>
  );
};

export default BusinessContactSection;