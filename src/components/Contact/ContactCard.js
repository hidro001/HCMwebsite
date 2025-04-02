import React from 'react';

const ContactCards = () => {
  return (
    <div className="mx-40 pt-20">
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">Get in touch with our team for any inquiries</p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {/* Sales Card */}
        <div className="w-full md:w-1/4 rounded-lg p-8 bg-white shadow-lg">
          <div className="flex flex-col gap-4 items-center">
            {/* Icon */}
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-yellow-500">Sales</h2>

            {/* Description */}
            <p className="text-gray-600 text-center">Explore how Human Maximizer helps grow your business today</p>

            {/* Button */}
            <div className="pt-4">
              <a href="#" className="inline-block border-2 border-yellow-500 text-yellow-500 font-medium px-6 py-2 rounded hover:bg-yellow-500 hover:text-white transition-colors">
                Talk To Us
              </a>
            </div>
          </div>
        </div>

        {/* Support Card */}
        <div className="w-full md:w-1/4 rounded-lg p-8 bg-white shadow-lg">
          <div className="flex flex-col gap-4 items-center">
            {/* Icon */}
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M18 12H6M6 12a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2M6 12a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2h-12z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-red-400">Support</h2>

            {/* Description */}
            <p className="text-gray-600 text-center">If you are our customer, we will always be here for you</p>

            {/* Button */}
            <div className="pt-4">
              <a href="#" className="inline-block border-2 border-red-400 text-red-400 font-medium px-6 py-2 rounded hover:bg-red-400 hover:text-white transition-colors">
                Get Help
              </a>
            </div>
          </div>
        </div>

        {/* Partners Card */}
        <div className="w-full md:w-1/4 rounded-lg p-8 bg-white shadow-lg">
          <div className="flex flex-col gap-4 items-center">
            {/* Icon */}
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-blue-500">Partners</h2>

            {/* Description */}
            <p className="text-gray-600 text-center">Partner with us to expand your business opportunities</p>

            {/* Button */}
            <div className="pt-4">
              <a href="#" className="inline-block border-2 border-blue-500 text-blue-500 font-medium px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors">
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        {/* Media Card */}
        <div className="w-full md:w-1/4 rounded-lg p-8 bg-white shadow-lg">
          <div className="flex flex-col gap-4 items-center">
            {/* Icon */}
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-yellow-500">Media</h2>

            {/* Description */}
            <p className="text-gray-600 text-center">Get the latest news and updates on Human Maximizer</p>

            {/* Button */}
            <div className="pt-4">
              <a href="#" className="inline-block border-2 border-yellow-500 text-yellow-500 font-medium px-6 py-2 rounded hover:bg-yellow-500 hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;