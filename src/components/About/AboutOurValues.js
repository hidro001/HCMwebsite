import React from 'react';
import { TrendingUp, Award, Target, Heart, BookOpen } from "lucide-react";

const CompanyValues = () => {
  const values = [
    {
      Icon: TrendingUp,
      title: 'Improve Every Day',
      description: 'Growth is not "set it and forget it". We strive to be better every day, as a business and as individuals.'
    },
    {
      Icon: Award,
      title: 'Deliver Excellence',
      description: 'Excellence, both in our products and customer success, is our North Star.'
    },
    {
      Icon: Target,
      title: 'Focus on Impact',
      description: 'As a business, the impact we create for our customers and solving their problems is our Chief Key Performance Indicator.'
    },
    {
      Icon: Heart,
      title: 'Drive Customer Success',
      description: 'Listen and treat every interaction with our customers as an opportunity to create an enduring relationship that adds value to them.'
    },
    {
      Icon: BookOpen,
      title: 'Nurture Learning & Sharing',
      description: 'We thrive in an environment of mutual trust, shared knowledge and collaboration.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-blue-100 select-none px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-16 relative text-center text-black">
        Our Values
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 20"
          className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-full max-w-[150px] sm:max-w-[200px] md:max-w-xs"
        >
          <path
            d="M10 10 Q150 20, 290 10"
            fill="none"
            stroke="#FFC700"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 cursor-pointer hover:border-yellow-500 transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            <div className="mb-4 sm:mb-6 text-center">
              {/* Custom styled icon container with matching yellow color */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black p-3 sm:p-4 transition-all transform hover:rotate-12 duration-300">
                <value.Icon className="w-full h-full" color="#FFC700" strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center">{value.title}</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;