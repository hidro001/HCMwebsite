import React from 'react';

const CompanyValues = () => {
  const values = [
    {
      icon: '📋',
      title: 'Improve Every Day',
      description: 'Growth is not "set it and forget it". We strive to be better every day, as a business and as individuals.'
    },
    {
      icon: '👍',
      title: 'Deliver Excellence',
      description: 'Excellence, both in our products and customer success, is our North Star.'
    },
    {
      icon: '⭕',
      title: 'Focus on Impact',
      description: 'As a business, the impact we create for our customers and solving their problems is our Chief Key Performance Indicator.'
    },
    {
      icon: '✨',
      title: 'Drive Customer Success',
      description: 'Listen and treat every interaction with our customers as an opportunity to create an enduring relationship that adds value to them.'
    },
    {
      icon: '🎓',
      title: 'Nurture Learning & Sharing',
      description: 'We thrive in an environment of mutual trust, shared knowledge and collaboration.'
    }
  ];

  return (
    <div className="py-20 select-none px-24">
      <h2 className="text-4xl font-bold mb-16 relative text-center">
        Our Values
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 20"
          className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-full max-w-xs"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-8 cursor-pointer hover:border-green-500 transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            <div className="text-5xl mb-6 text-center transition-all transform hover:rotate-12 duration-300" style={{ color: '#FFC700' }}>
              {value.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">{value.title}</h3>
            <p className="text-gray-600 text-center">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
